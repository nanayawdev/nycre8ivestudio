interface EmailTemplateProps {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export function EmailTemplate({ name, email, phone, service, message }: EmailTemplateProps) {
  return {
    subject: `New Contact Form Submission - ${service}`,
    html: `
      <div>
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <div style="white-space: pre-wrap; margin-top: 20px">
          <strong>Message:</strong><br />
          ${message}
        </div>
      </div>
    `
  }
} 