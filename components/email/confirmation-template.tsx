interface ConfirmationTemplateProps {
  email: string
  service: string
}

export const ConfirmationTemplate: React.FC<ConfirmationTemplateProps> = ({
  email,
  service,
}) => (
  <div>
    <h1>Thank you for contacting NYCre8ive Studio!</h1>
    <p>Hi there,</p>
    <p>This email confirms that we've received your inquiry about {service}. I'll personally review it and get back to you at {email} as soon as possible.</p>
    <br />
    <p>Best regards,</p>
    <p>Israel Nana Yaw<br />NYCre8ive Studio</p>
  </div>
) 