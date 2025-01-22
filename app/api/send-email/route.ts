// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import { SendGridEmail, SendGridEmailToUser } from '@/lib/sendgrid';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        // Validate required fields
        // const requiredFields = ['firstName', 'lastName', 'email', 'message'];
        // for (const field of requiredFields) {
        //     if (!body[field]) {
        //         return NextResponse.json(
        //             { message: `${field} is required` },
        //             { status: 400 }
        //         );
        //     }
        // }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(body.email)) {
            return NextResponse.json(
                { message: 'Invalid email format' },
                { status: 400 }
            );
        }

        if (body.type == 'contact' || body.type == 'appointment') {
            await SendGridEmail(body);
        } else if (body.type == 'brochureDownload') {
            await SendGridEmailToUser(body);
        } else {
            return NextResponse.json(
                { message: 'Invalid type' },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { message: `${body.type} Email sent successfully` },
            { status: 200 }
        );
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { message: 'Failed to send email' },
            { status: 500 }
        );
    }
}