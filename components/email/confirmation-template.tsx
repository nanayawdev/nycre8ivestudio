interface ConfirmationTemplateProps {
  name: string
  email: string
  service: string
}

export function ConfirmationTemplate({ name, email, service }: ConfirmationTemplateProps) {
  return {
    subject: 'Thank you for contacting NY Cre8ive Studio',
    html: `
      <div>
        <h1>Thank you for contacting NY Cre8ive Studio!</h1>
        <p>Hi ${name},</p>
        <p>This email confirms that we&apos;ve received your inquiry about ${service}. I will personally review it and get back to you at ${email} as soon as possible.</p>
        <br />
        <p>Best regards,</p>
        <p>Israel Nana Yaw<br />NY Cre8ive Studio</p>
      </div>
    `
  }
} 