interface EmailTemplateProps {
  email: string
  phone: string
  service: string
  message: string
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  email,
  phone,
  service,
  message,
}) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Phone:</strong> {phone}</p>
    <p><strong>Service:</strong> {service}</p>
    <div style={{ whiteSpace: 'pre-wrap', marginTop: '20px' }}>
      <strong>Message:</strong><br />
      {message}
    </div>
  </div>
) 