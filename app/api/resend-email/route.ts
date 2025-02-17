import { NextResponse } from 'next/server';
import { SendGridEmail } from '@/lib/sendgrid';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  let submission;
  try {
    submission = await request.json();
    const supabase = createRouteHandlerClient({ cookies });
    
    // First update status to 'pending'
    const { error: updateError } = await supabase
      .from('contact_submissions')
      .update({ 
        email_status: 'pending',
        email_sent_at: new Date().toISOString()
      })
      .eq('id', submission.id);

    if (updateError) {
      console.error('Error updating to pending:', updateError);
    }

    // Attempt to send email
    await SendGridEmail(submission);
    
    // If email sent successfully, update status
    const { error: successError } = await supabase
      .from('contact_submissions')
      .update({ 
        email_status: 'sent',
        email_sent_at: new Date().toISOString(),
        error_message: null
      })
      .eq('id', submission.id);

    if (successError) {
      console.error('Error updating success status:', successError);
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error resending email:', error);

    // Update status to failed in Supabase
    const supabase = createRouteHandlerClient({ cookies });
    const { error: failureError } = await supabase
      .from('contact_submissions')
      .update({ 
        email_status: 'failed',
        error_message: error instanceof Error ? error.message : 'Unknown error',
        email_sent_at: new Date().toISOString()
      })
      .eq('id', submission.id);

    if (failureError) {
      console.error('Error updating failure status:', failureError);
    }

    return NextResponse.json(
      { error: 'Failed to resend email' },
      { status: 500 }
    );
  }
}