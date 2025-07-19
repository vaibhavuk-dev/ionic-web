import React, { useState } from 'react';
import { X } from 'lucide-react';

interface DownloadBrochure {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string,
  agreeToPrivacy: boolean;
}

const DownloadBrochureForm = ({ isOpen, onClose, brochureInfo }: any) => {
  const [formData, setFormData] = useState<DownloadBrochure>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    agreeToPrivacy: false
  });

  const [submitStatus, setSubmitStatus] = useState<any>({
    type: null,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          brochure: brochureInfo,
          type: 'download'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to process download');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! The brochure will start downloading soon.'
      });

      // Trigger the download after successful email
      // const link = document.createElement('a');
      // link.href = brochureInfo.pdf?.includes('sanity') ? brochureInfo.pdf : `/brochuresp/pdfs/${brochureInfo.pdf}`;
      // link.download = brochureInfo.name;
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);

      const pdfUrl = brochureInfo.pdf?.includes('sanity')
        ? brochureInfo.pdf
        : `/brochuresp/pdfs/${brochureInfo.pdf}`;
      window.open(pdfUrl, '_blank');

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        agreeToPrivacy: false
      });

      // Close modal after successful submission
      setTimeout(() => {
        onClose();
        setSubmitStatus({ type: null, message: '' });
      }, 3000);

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to process your request. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Download Brochure</h2>
          <p className="text-gray-600 mb-6 text-left">
            Please fill out this form to download the brochure for {brochureInfo?.name}.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <input
                type="text"
                id="company"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="privacy"
                required
                className="h-4 w-4 rounded border-gray-300"
                checked={formData.agreeToPrivacy}
                onChange={(e) => setFormData({ ...formData, agreeToPrivacy: e.target.checked })}
              />
              <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                I agree to the <a href="/privacy-policy" target='_blank' className="underline">privacy policy</a>.
              </label>
            </div>

            {submitStatus.message && (
              <div
                className={`p-4 rounded-lg ${submitStatus.type === 'success'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
                  }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 disabled:opacity-50"
            >
              {isSubmitting ? 'Processing...' : 'Download Brochure'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DownloadBrochureForm;