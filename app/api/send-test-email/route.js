import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

// Set the SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST() {
  try {
    const msg = {
      to: 'vaibhavuk.dev@gmail.com',
        from: 'vaibhavuk.dev@gmail.com',
      subject: 'Hardcoded Email Test',
      text: 'This is a hardcoded plain text email.',
      html: '<p>This is a <strong>hardcoded HTML</strong> email.</p>',
    };

    // Send the email
    await sgMail.send(msg);

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);

    // Log SendGrid-specific errors
    if (error.response) {
      console.error(error.response.body);
    }

    return NextResponse.json(
      { error: 'Failed to send email. Check the server logs for more details.' },
      { status: 500 }
    );
  }
}
