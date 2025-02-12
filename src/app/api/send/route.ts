import { Resend } from 'resend'
import { EmailTemplate } from '../../../../components/email/email-template'
import { ConfirmationTemplate } from '../../../../components/email/confirmation-template'

if (!process.env.RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY environment variable')
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: 'Missing Resend API key' },
        { status: 500 }
      )
    }

    // Send notification to admin
    await resend.emails.send({
      from: 'NY Cre8ive Studio <me@nycre8ivestudio.com>',
      to: ['me@nycre8ivestudio.com'],
      ...EmailTemplate({ name, email, phone, service, message }),
      replyTo: email
    })

    // Send confirmation to user
    await resend.emails.send({
      from: 'NY Cre8ive Studio <me@nycre8ivestudio.com>',
      to: [email],
      ...ConfirmationTemplate({ name, email, service }),
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return Response.json({ error: 'Failed to send email' }, { status: 500 })
  }
} 