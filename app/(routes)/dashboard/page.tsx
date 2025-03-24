'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';

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
  const [expandedSubmissions, setExpandedSubmissions] = useState<Set<number>>(new Set());
  const [filters, setFilters] = useState({
    emailStatus: 'all' as 'all' | 'pending' | 'sent' | 'failed',
    type: 'all' as 'all' | 'contact' | 'appointment' | 'download',
    startDate: '',
    endDate: ''
  });

  useEffect(() => {
    fetchSubmissions();
  }, [filters]);

  async function fetchSubmissions() {
    setLoading(true);
    let query = supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    // Apply email status filter
    if (filters.emailStatus !== 'all') {
      query = query.eq('email_status', filters.emailStatus);
    }

    // Apply type filter
    if (filters.type !== 'all') {
      query = query.eq('type', filters.type);
    }

    // Apply date range filter
    if (filters.startDate) {
      query = query.gte('created_at', new Date(filters.startDate).toISOString());
    }
    if (filters.endDate) {
      query = query.lte('created_at', new Date(filters.endDate).toISOString());
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

  const toggleSubmissionExpand = (id: number) => {
    const newExpandedSubmissions = new Set(expandedSubmissions);
    if (newExpandedSubmissions.has(id)) {
      newExpandedSubmissions.delete(id);
    } else {
      newExpandedSubmissions.add(id);
    }
    setExpandedSubmissions(newExpandedSubmissions);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Submissions Dashboard</h1>
      
      {/* Advanced Filters */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Status</label>
          <select 
            name="emailStatus"
            value={filters.emailStatus}
            onChange={handleFilterChange}
            className="mt-1 block w-full border rounded px-3 py-2"
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="sent">Sent</option>
            <option value="failed">Failed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Submission Type</label>
          <select 
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="mt-1 block w-full border rounded px-3 py-2"
          >
            <option value="all">All Types</option>
            <option value="contact">Contact</option>
            <option value="appointment">Appointment</option>
            <option value="download">Download</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Start Date</label>
          <input 
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={handleFilterChange}
            className="mt-1 block w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">End Date</label>
          <input 
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={handleFilterChange}
            className="mt-1 block w-full border rounded px-3 py-2"
          />
        </div>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : submissions.length === 0 ? (
        <div className="text-center text-gray-500">No submissions found</div>
      ) : (
        <div className="grid gap-4">
          {submissions.map((submission) => (
            <div 
              key={submission.id} 
              className={`border rounded-lg ${
                submission.email_status === 'failed' ? 'border-red-500' :
                submission.email_status === 'pending' ? 'border-yellow-500' :
                'border-green-500'
              }`}
            >
              {/* Submission Header */}
              <div 
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleSubmissionExpand(submission.id)}
              >
                <div className="flex items-start space-x-4">
                  <div>
                    <h2 className="text-xl font-semibold">
                      {submission.first_name} {submission.last_name}
                    </h2>
                    <p className="text-gray-600">{submission.company}</p>
                  </div>
                  {/* <span className={`px-3 py-1 rounded-full text-sm ${
                    submission.email_status === 'failed' ? 'bg-red-100 text-red-800' :
                    submission.email_status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {submission.email_status}
                  </span> */}
                  
                  <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 capitalize">
                    {submission.type}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                    {new Date(submission.created_at).toLocaleString()}
                  </span>
                </div>
                <div>
                  {expandedSubmissions.has(submission.id) ? (
                    <ChevronUp className="text-gray-500" />
                  ) : (
                    <ChevronDown className="text-gray-500" />
                  )}
                </div>
              </div>

              {/* Expanded Submission Details */}
              {expandedSubmissions.has(submission.id) && (
                <div className="p-4 border-t">
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
                      <p className="text-sm text-gray-600">Submitted</p>
                      <p>{new Date(submission.created_at).toLocaleString()}</p>
                    </div>
                    {submission.email_sent_at && (
                      <div>
                        <p className="text-sm text-gray-600">Email Sent</p>
                        <p>{new Date(submission.email_sent_at).toLocaleString()}</p>
                      </div>
                    )}
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

                  {false && (submission.email_status === 'failed' || submission.email_status === 'pending') && (
                    <button
                      onClick={() => resendEmail(submission)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Resend Email
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}