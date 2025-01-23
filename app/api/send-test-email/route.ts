import { sendEmail } from '@/lib/awsses';
import { NextResponse } from 'next/server';

export async function POST() {
  const customerName = "Vaibhav Kakde";
  const customerEmail = "vaibhavuk@gmail.com";
  const customerPhone = "+1 123-456-7890";
  const customerMessage = "This is a test message from the contact form.";
  
  try {
    const msg = {
      to: 'vaibhavuk.dev@gmail.com',
      subject: "Test Email from AWS SES",
    body: `<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background-color: #f4f4f4; padding: 20px; border-radius: 8px;">
    <h2>New Contact Form Submission</h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td><strong>Name:</strong></td><td>${customerName}</td></tr>
      <tr><td><strong>Email:</strong></td><td>${customerEmail}</td></tr>
      <tr><td><strong>Phone:</strong></td><td>${customerPhone}</td></tr>
      <tr><td><strong>Message:</strong></td><td>${customerMessage}</td></tr>
    </table>
  </div>
</body>
</html>`, // Replace with your desired HTML content
  };

    await sendEmail(msg);

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);

    return NextResponse.json(
      { error: 'Failed to send email. Check the server logs for more details.' },
      { status: 500 }
    );
  }
}
