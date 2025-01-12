// lib/sendgrid.ts
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

interface ContactData {
    type: 'contact';
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    message: string;
}

interface AppointmentData {
    type: 'appointment';
    firstName: string;
    lastName: string;
    email: string;
    date: string;
    time: string;
    purpose: string;
}

type EmailData = ContactData | AppointmentData;

export async function SendGridEmail(data: EmailData) {
    let emailContent;
    let subject;

    if (data.type === 'contact') {
        subject = 'New Contact Form Submission';
        emailContent = {
            text: `
                New Contact Form Submission
                
                Name: ${data.firstName} ${data.lastName}
                Email: ${data.email}
                Company: ${data.company}
                
                Message:
                ${data.message}
            `,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Company:</strong> ${data.company}</p>
                <p><strong>Message:</strong></p>
                <p>${data.message.replace(/\n/g, '<br>')}</p>
            `
        };
    } else {
        subject = 'New Appointment Request';
        emailContent = {
            text: `
                New Appointment Request
                
                Name: ${data.firstName} ${data.lastName}
                Email: ${data.email}
                Requested Date: ${data.date}
                Requested Time: ${data.time}
                
                Purpose of Meeting:
                ${data.purpose}
            `,
            html: `
                <h2>New Appointment Request</h2>
                <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Requested Date:</strong> ${data.date}</p>
                <p><strong>Requested Time:</strong> ${data.time}</p>
                <p><strong>Purpose of Meeting:</strong></p>
                <p>${data.purpose.replace(/\n/g, '<br>')}</p>
            `
        };
    }

    const msg = {
        to: 'thisisvuk1@gmail.com', // Replace with your recipient email
        from: 'vaibhavuk.dev@gmail.com', // Replace with your verified SendGrid sender
        subject,
        text: emailContent.text,
        html: emailContent.html,
    };

    try {
        await sgMail.send(msg);
        return { success: true };
    } catch (error) {
        console.error('SendGrid Error:', error);
        throw new Error('Failed to send email');
    }
}



