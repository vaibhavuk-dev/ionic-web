'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type Submission = {
  id: number;
  type: 'contact' | 'appointment' | 'download';
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string;
  message: string | null;
  appointment_date: string | null;
  appointment_time: string | null;
  brochure_details: any;
  email_status: 'pending' | 'sent' | 'failed';
  created_at: string;
  email_sent_at: string | null;
};

export default function Dashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'failed'>('all');

  useEffect(() => {
    fetchSubmissions();
  }, [filter]);

  async function fetchSubmissions() {
    setLoading(true);
    let query = supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (filter === 'pending') {
      query = query.eq('email_status', 'pending');
    } else if (filter === 'failed') {
      query = query.eq('email_status', 'failed');
    }

    const { data, error } = await query;
    
    if (error) {
      console.error('Error fetching submissions:', error);
    } else {
      setSubmissions(data || []);
    }
    setLoading(false);
  }

  async function resendEmail(submission: Submission) {
    try {
      const response = await fetch('/api/resend-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission),
      });
      
      if (!response.ok) throw new Error('Failed to resend email');
      
      await fetchSubmissions();
    } catch (error) {
      console.error('Error resending email:', error);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Submissions Dashboard</h1>
      
      {/* Filter Controls */}
      <div className="mb-6">
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value as any)}
          className="border rounded px-3 py-2"
        >
          <option value="all">All Submissions</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
        </select>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid gap-4">
          {submissions.map((submission) => (
            <div 
              key={submission.id} 
              className={`border rounded-lg p-4 ${
                submission.email_status === 'failed' ? 'border-red-500' :
                submission.email_status === 'pending' ? 'border-yellow-500' :
                'border-green-500'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    {submission.first_name} {submission.last_name}
                  </h2>
                  <p className="text-gray-600">{submission.company}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  submission.email_status === 'failed' ? 'bg-red-100 text-red-800' :
                  submission.email_status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {submission.email_status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p>{submission.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p>{submission.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Type</p>
                  <p className="capitalize">{submission.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Submitted</p>
                  <p>{new Date(submission.created_at).toLocaleString()}</p>
                </div>
              </div>

              {submission.message && (
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Message</p>
                  <p className="whitespace-pre-wrap">{submission.message}</p>
                </div>
              )}

              {submission.appointment_date && (
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Appointment</p>
                  <p>
                    {new Date(submission.appointment_date).toLocaleDateString()} at{' '}
                    {submission.appointment_time}
                  </p>
                </div>
              )}

              {submission.brochure_details && (
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Downloaded Brochure</p>
                  <p>{submission.brochure_details.name}</p>
                </div>
              )}

              {(submission.email_status === 'failed' || submission.email_status === 'pending') && (
                <button
                  onClick={() => resendEmail(submission)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Resend Email
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}