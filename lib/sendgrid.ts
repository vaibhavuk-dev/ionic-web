import { sendEmail } from "./awsses";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const getFormattedDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

const getFormattedTime = (time: string) => {
    return new Date(`2000/01/01 ${time}`).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
};

export async function SendGridEmail(data: any) {
    let body : 
    {
        Html: string,
        Text: string
    } = {Text: ``, Html: ``};
    let subject = "";

    const baseStyle = `
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0556A7; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
        .content { background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 5px 5px; }
        .info-block { background: #f5f5f5; padding: 15px; margin: 15px 0; border-radius: 5px; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
        .logo { max-width: 200px; margin-bottom: 20px; }
    `;

    switch (data.type) {
        case 'contact':
            subject = `🔔 New Contact Form Submission From ${data.firstName} ${data.lastName}, ${data.company}`;
            body = {
                Text: `
                    New Contact Form Submission - Ionic Engineering
                    
                    Contact Details:
                    ---------------
                    Name: ${data.firstName} ${data.lastName}
                    Email: ${data.email}
                    Phone: ${data.phone}
                    Company: ${data.company}
                    
                    Message:
                    --------
                    ${data.message}
                    
                    Submission Time: ${new Date().toLocaleString()}
                `,
                Html: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>${baseStyle}</style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="header">
                                <img src="https://www.ionic.co.in/logo/ionic_logo_white.png" alt="Ionic Engineering" class="logo">
                                <h1>New Contact Form Submission</h1>
                            </div>
                            
                            <div class="content">
                                <div class="info-block">
                                    <h2>Contact Details</h2>
                                    <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
                                    <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
                                    <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
                                    <p><strong>Company:</strong> ${data.company}</p>
                                    <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
                                </div>

                                <div class="info-block">
                                    <h2>Message</h2>
                                    <p>${data.message?.replace(/\n/g, '<br>')}</p>
                                </div>

                                <div class="info-block">
                                    <h2>Quick Actions</h2>
                                    <p>
                                        <a href="mailto:${data.email}" style="color: #0066cc;">Reply to ${data.firstName}</a> |
                                        <a href="tel:${data.phone}" style="color: #0066cc;">Call Contact</a>
                                    </p>
                                </div>

                                <div class="footer">
                                    <p><strong>IONIC ENGINEERING TECHNOLOGY PVT LTD</strong></p>
                                    <p>This is an automated notification. Please do not reply to this email.</p>
                                </div>
                            </div>
                        </div>
                    </body>
                    </html>
                `
            };
            break;

        case 'appointment':
            subject = `📅 New Appointment Request From ${data.firstName} ${data.lastName}, ${data.company}`;
            body = {
                Text: `
                    New Appointment Request - Ionic Engineering
                    
                    Appointment Details:
                    -------------------
                    Name: ${data.firstName} ${data.lastName}
                    Email: ${data.email}
                    Phone: ${data.phone}
                    Company: ${data.company}
                    Date: ${getFormattedDate(data.date!)}
                    Time: ${getFormattedTime(data.time!)}
                    
                    Purpose:
                    --------
                    ${data.purpose}
                    
                    Request Time: ${new Date().toLocaleString()}
                `,
                Html: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>${baseStyle}</style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="header">
                                <img src="https://www.ionic.co.in/logo/ionic_logo_white.png" alt="Ionic Engineering" class="logo">
                                <h1>New Appointment Request</h1>
                            </div>
                            
                            <div class="content">
                                <div class="info-block">
                                    <h2>Appointment Details</h2>
                                    <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
                                    <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
                                    <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
                                    <p><strong>Company:</strong> ${data.company}</p>
                                    <p><strong>Requested Date:</strong> ${getFormattedDate(data.date!)}</p>
                                    <p><strong>Requested Time:</strong> ${getFormattedTime(data.time!)}</p>
                                    <p><strong>Request Received:</strong> ${new Date().toLocaleString()}</p>
                                </div>

                                <div class="info-block">
                                    <h2>Purpose of Meeting</h2>
                                    <p>${data.purpose?.replace(/\n/g, '<br>')}</p>
                                </div>

                                <div class="info-block">
                                    <h2>Quick Actions</h2>
                                    <p>
                                        <a href="mailto:${data.email}?subject=RE: Appointment Request - Ionic Engineering" style="color: #0066cc;">Respond to Request</a> |
                                        <a href="https://calendar.google.com/calendar/r/eventedit?text=Meeting+with+${data.firstName}+${data.lastName}&dates=${data.date}T${data.time?.replace(':', '')}/&details=${encodeURIComponent(data.purpose || '')}" target="_blank" style="color: #0066cc;">Add to Calendar</a>
                                    </p>
                                </div>

                                <div class="footer">
                                    <p><strong>IONIC ENGINEERING TECHNOLOGY PVT LTD</strong></p>
                                    <p>This is an automated notification. Please do not reply to this email.</p>
                                </div>
                            </div>
                        </div>
                    </body>
                    </html>
                `
            };
            break;

        case 'download':
            subject = `📥 New Brochure Download From ${data.firstName} ${data.lastName}, ${data.company}`;
            body = {
                Text: `
                    New Brochure Download - Ionic Engineering
                    
                    User Details:
                    -------------
                    Name: ${data.firstName} ${data.lastName}
                    Email: ${data.email}
                    Company: ${data.company}
                    Phone: ${data.phone}
                    
                    Download Details:
                    ----------------
                    Brochure: ${data.brochure?.name}
                    Category: ${data.brochure?.category}
                    File: ${data.brochure?.pdf}
                    
                    Download Time: ${new Date().toLocaleString()}
                `,
                Html: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>${baseStyle}</style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="header">
                                <img src="https://www.ionic.co.in/logo/ionic_logo_white.png" alt="Ionic Engineering" class="logo">
                                <h1>New Brochure Download</h1>
                            </div>
                            
                            <div class="content">
                                <div class="info-block">
                                    <h2>User Details</h2>
                                    <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
                                    <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
                                    <p><strong>Company:</strong> ${data.company}</p>
                                    <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
                                </div>

                                <div class="info-block">
                                    <h2>Download Details</h2>
                                    <p><strong>Brochure:</strong> ${data.brochure?.name}</p>
                                    <p><strong>Category:</strong> ${data.brochure?.category}</p>
                                    <p><strong>File:</strong> ${data.brochure?.pdf}</p>
                                    <p><strong>Download Time:</strong> ${new Date().toLocaleString()}</p>
                                </div>

                                <div class="info-block">
                                    <h2>Quick Actions</h2>
                                    <p>
                                        <a href="mailto:${data.email}?subject=RE: ${data.brochure?.name} Download - Ionic Engineering" style="color: #0066cc;">Follow Up</a> |
                                        <a href="tel:${data.phone}" style="color: #0066cc;">Call Prospect</a>
                                    </p>
                                </div>

                                <div class="footer">
                                    <p><strong>IONIC ENGINEERING TECHNOLOGY PVT LTD</strong></p>
                                    <p>This is an automated notification. Please do not reply to this email.</p>
                                </div>
                            </div>
                        </div>
                    </body>
                    </html>
                `
            };
            break;
    }

    const msg = {
        to: ['support@ionic.co.in', 'contact@ionic.co.in', 'thisisvuk1@gmail.com'],
        subject,
        body
    };

    try {
        const submissionId = crypto.randomUUID(); // Generate unique ID
        const createdAt = new Date().toISOString(); // Store timestamp once
    
        // Store in Supabase first
        const { error: dbError } = await supabase
            .from('contact_submissions')
            .insert({
                unique_id: submissionId,  // Store unique ID
                type: data.type,
                first_name: data.firstName,
                last_name: data.lastName,
                email: data.email,
                phone: data.phone,
                company: data.company,
                message: data.type === 'contact' ? data.message : 
                        data.type === 'appointment' ? data.purpose : null,
                appointment_date: data.type === 'appointment' ? data.date : null,
                appointment_time: data.type === 'appointment' ? data.time : null,
                brochure_details: data.type === 'download' ? data.brochure : null,
                email_subject: subject,
                email_status: 'pending',
                created_at: createdAt
            });
    
        if (dbError) {
            console.error('Supabase Insert Error:', dbError);
            // return { success: false, error: dbError };
        }
    
        try {
            // Send email
            await sendEmail(msg);

            console.log("Email sent successfully", submissionId);
    
            // Update status to 'sent' if email succeeds
            const { data: updateData, error: updateError } = await supabase
                .from('contact_submissions')
                .update({ 
                    email_status: 'sent',
                    email_sent_at: new Date().toISOString()
                })
                .eq('unique_id', submissionId)  // Use unique ID for update
                .select() // Use `.select()` to check what got updated

            console.log("Supabase Update Response:", updateData, submissionId); // Log result

            if (updateError) {
                console.error('Supabase Update Error:', updateError);
            }
    
            return { success: true };
    
        } catch (emailError) {
            console.error('AWS SES Error:', emailError);
    
            // Update status to 'failed' if email sending fails
            const { error: updateError } = await supabase
                .from('contact_submissions')
                .update({ 
                    email_status: 'failed',
                    error_message: emailError instanceof Error ? emailError.message : 'Unknown error'
                })
                .eq('id', submissionId);  // Use unique ID for update
    
            if (updateError) {
                console.error('Supabase Update Error:', updateError);
            }
    
            throw new Error('Failed to send email');
        }
    } catch (error) {
        console.error('Unexpected Error:', error);
        return { success: false, error };
    }
    
}

// export async function SendGridEmailToUser(data: DownloadBrochure) {
//     const {subject, emailContent} = getBrochureDownloadEmailTemplate(data);

//     const msg = {
//         to: data.email, // Replace with your recipient email
//         from: 'vaibhavuk.dev@gmail.com', // Replace with your verified SendGrid sender
//         subject,
//         text: emailContent.text,
//         html: emailContent.html,
//     };

//     try {
//         await sgMail.send(msg);
//         return { success: true };
//     } catch (error) {
//         console.error('SendGrid Error:', error);
//         throw new Error('Failed to send email');
//     }
// }

// const getBrochureDownloadEmailTemplate = (data: DownloadBrochure) => {
//     const subject = `Your Requested Brochure - ${data.brochure.name} From ${data.firstName} ${data.lastName}, ${data.company}` Technology`;
    
//     const emailContent = {
//         text: `
//             Dear ${data.firstName} ${data.lastName},

//             Thank you for your interest in ${data.brochure.name} from Ionic Engineering Technology Pvt. Ltd.

//             Please find the requested brochure attached to this email. We hope you find the information helpful in understanding our solutions better.

//             Key Information:
//             - Product: ${data.brochure.name}
//             - Category: ${data.brochure.category}

//             Should you have any questions or require additional information, our team would be happy to assist you:
//             - Email: contact@ionic.co.in
//             - Phone: 020-27475272/73
//             - Website: www.ionic.co.in

//             About Ionic Engineering:
//             We are an ISO 9001:2015 certified company specializing in water and wastewater treatment solutions. With over decades of experience, we provide innovative and sustainable solutions for industrial and commercial applications.

//             Stay Connected:
//             Follow us on LinkedIn: https://www.linkedin.com/company/ionic-engineering-technology-pvt-ltd

//             Best Regards,
//             Ionic Engineering Team

//             IONIC ENGINEERING TECHNOLOGY PVT LTD
//             S. No. 1, 5, 11, 12 & 13, Ground Floor, B Wing,
//             Mahalaxmi Heights, Mumbai-Pune Road, Pimpiri,
//             Pune-18, Maharashtra, INDIA
//         `,
//         html: `
//             <!DOCTYPE html>
//             <html>
//             <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
//                 <div style="padding: 20px;">
//                     <img src="https://www.ionic.co.in/logo/ionic_logo.png" alt="Ionic Engineering Technology Logo" style="max-width: 200px; margin-bottom: 20px;">
                    
//                     <h2 style="color: #003366;">Thank You for Your Interest</h2>
                    
//                     <p>Dear ${data.firstName} ${data.lastName},</p>
                    
//                     <p>Thank you for your interest in <strong>${data.brochure.name}</strong> from Ionic Engineering Technology Pvt. Ltd.</p>
                    
//                     <p>Please find the requested brochure attached to this email. We hope you find the information helpful in understanding our solutions better.</p>
                    
//                     <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
//                         <h3 style="color: #003366; margin-top: 0;">Download Details:</h3>
//                         <p style="margin: 5px 0;"><strong>Product:</strong> ${data.brochure.name}</p>
//                         <p style="margin: 5px 0;"><strong>Category:</strong> ${data.brochure.category}</p>
//                     </div>
                    
//                     <div style="background-color: #e6f3ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
//                         <h3 style="color: #003366; margin-top: 0;">Need Assistance?</h3>
//                         <p>Our team is here to help you with any questions:</p>
//                         <ul style="list-style: none; padding-left: 0;">
//                             <li>📧 Email: <a href="mailto:contact@ionic.co.in" style="color: #0066cc;">contact@ionic.co.in</a></li>
//                             <li>📞 Phone: <a href="tel:02027475272" style="color: #0066cc;">020-27475272/73</a></li>
//                             <li>🌐 Website: <a href="https://www.ionic.co.in" style="color: #0066cc;">www.ionic.co.in</a></li>
//                         </ul>
//                     </div>
                    
//                     <div style="margin: 20px 0;">
//                         <h3 style="color: #003366;">About Ionic Engineering</h3>
//                         <p>We are an ISO 9001:2015 certified company specializing in water and wastewater treatment solutions. With over decades of experience, we provide innovative and sustainable solutions for industrial and commercial applications.</p>
//                     </div>
                    
//                     <div style="margin: 20px 0;">
//                         <h3 style="color: #003366;">Stay Connected</h3>
//                         <p>Follow us on <a href="https://www.linkedin.com/company/ionic-engineering-technology-pvt-ltd" style="color: #0066cc;">LinkedIn</a> for the latest updates and innovations in water treatment technology.</p>
//                     </div>
                    
//                     <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
//                         <p style="font-weight: bold; margin-bottom: 5px;">Best Regards,</p>
//                         <p style="margin: 0;">Ionic Engineering Team</p>
//                         <div style="margin-top: 15px; font-size: 12px; color: #666;">
//                             <p style="margin: 2px 0;"><strong>IONIC ENGINEERING TECHNOLOGY PVT LTD</strong></p>
//                             <p style="margin: 2px 0;">S. No. 1, 5, 11, 12 & 13, Ground Floor, B Wing,</p>
//                             <p style="margin: 2px 0;">Mahalaxmi Heights, Mumbai-Pune Road, Pimpiri,</p>
//                             <p style="margin: 2px 0;">Pune-18, Maharashtra, INDIA</p>
//                         </div>
//                     </div>
//                 </div>
//             </body>
//             </html>
//         `
//     };

//     return { subject, emailContent };
// };

