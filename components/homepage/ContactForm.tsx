"use client"
import { useState } from 'react';
interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    message: string;
    agreeToPrivacy: boolean;
}

interface AppointmentData {
    firstName: string;
    lastName: string;
    email: string;
    date: string;
    time: string;
    purpose: string;
    agreeToPrivacy: boolean;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: '',
        agreeToPrivacy: false
    });

    // New appointment form state
    const [appointmentData, setAppointmentData] = useState<AppointmentData>({
        firstName: '',
        lastName: '',
        email: '',
        date: '',
        time: '',
        purpose: '',
        agreeToPrivacy: false
    });

    const [activeTab, setActiveTab] = useState<'contact' | 'appointment'>('contact');
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({
        type: null,
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Get tomorrow's date as minimum date for appointment
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];

    // Handle contact form submission
    const handleContactSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, type: 'contact' }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to send email');
            }

            setSubmitStatus({
                type: 'success',
                message: 'Thank you for your message. We will get back to you soon!'
            });

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                company: '',
                message: '',
                agreeToPrivacy: false
            });

        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Failed to send message. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Handle appointment form submission
    const handleAppointmentSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...appointmentData, type: 'appointment' }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to schedule appointment');
            }

            setSubmitStatus({
                type: 'success',
                message: 'Your appointment request has been sent. We will confirm shortly!'
            });

            setAppointmentData({
                firstName: '',
                lastName: '',
                email: '',
                date: '',
                time: '',
                purpose: '',
                agreeToPrivacy: false
            });

        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Failed to schedule appointment. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full relative bg-white mx-auto  container" id="contact-form">
            <h1 className="text-4xl font-bold text-textcolorDark mb-8">Chat to our friendly team</h1>
            <p className="text-textcolor mb-12">We'd love to hear from you. Please fill out this form or shoot us an email.</p>

            <div className="w-full flex flex-col lg:flex-row gap-12">
                {/* Contact Methods */}
                <div className='flex flex-col h-full overflow-hidden items-center justify-center'>
                    <div className='w-full h-1/2 flex flex-col gap-12'>
                        <div className="w-full h-1/2 grid grid-cols-1 gap-12">
                            {/* Email */}
                            <div>
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-full bg-primaryLight flex items-center justify-center">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h2 className="ml-4 text-xl font-semibold text-textcolorDark">Email</h2>
                                </div>
                                <p className="text-textcolor mb-2">Our friendly team is here to help.</p>
                                <a href="mailto:contact@ionic.co.in" className="text-primary hover:underline">contact@ionic.co.in</a><br />
                                <a href="mailto:support@ionic.co.in" className="text-primary hover:underline">support@ionic.co.in</a>
                            </div>

                            {/* Phone */}
                            <div>
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-full bg-primaryLight flex items-center justify-center">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <h2 className="ml-4 text-xl font-semibold text-textcolorDark">Phone</h2>
                                </div>
                                <p className="text-textcolor mb-2">Mon-Fri from 9:30 AM to 6:30 PM.</p>
                                <a href="tel:020-27475272" className="text-primary hover:underline">020-27475272/73</a><br />
                                <a href="tel:020-29525874" className="text-primary hover:underline">020-29525874</a><br />
                                <a href="tel:08275486263" className="text-primary hover:underline">08275486263</a>
                            </div>

                            {/* Office */}
                            <div className='col-span-2'>
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-full bg-primaryLight flex items-center justify-center">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h2 className="ml-4 text-xl font-semibold text-textcolorDark">Office</h2>
                                </div>
                                <p className="text-textcolor mb-2">Come say hello at our office HQ.</p>
                                <p className="text-textcolor">
                                    <b>IONIC ENGINEERING TECHNOLOGY PVT LTD</b><br />
                                    <span className='font-medium'>(An ISO 9001:2015 Certified Company)</span><br />
                                    S. No. 1, 5, 11, 12 & 13, Ground Floor, B Wing,<br />
                                    Mahalaxmi Heights, Mumbai-Pune Road, Pimpiri,<br />
                                    Pune-18 ,Maharashtra, INDIA.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[300px] mt-8">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15122.922505541159!2d73.79250328511964!3d18.63118198564944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b84e62f8c169%3A0xf6df110a3e44ab98!2sIonic%20Engineering%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1716738071408!5m2!1sen!2sin"
                            className="w-full h-full"
                            loading="lazy"
                            style={{ height: '100%' }}
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="w-full lg:w-1/2 bg-primary rounded-2xl px-5 py-3">


                    <div className="w-full bg-primary rounded-2xl p-8">
                        <div className="flex mb-6 space-x-4">
                            <button
                                onClick={() => {
                                    setActiveTab('contact'); setSubmitStatus({
                                        type: null,
                                        message: ''
                                    })
                                }}
                                className={`flex-1 py-2 px-4 rounded-lg ${activeTab === 'contact'
                                    ? 'bg-white text-primary'
                                    : 'bg-transparent text-white border'
                                    }`}
                            >
                                Contact Us
                            </button>
                            <button
                                onClick={() => {
                                    setActiveTab('appointment'); setSubmitStatus({
                                        type: null,
                                        message: ''
                                    })
                                }}
                                className={`flex-1 py-2 px-4 rounded-lg ${activeTab === 'appointment'
                                    ? 'bg-white text-primary'
                                    : 'bg-transparent text-white border'
                                    }`}
                            >
                                Schedule Appointment
                            </button>
                        </div>

                        {activeTab === 'contact' ? (
                            <form onSubmit={handleContactSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-white mb-2">First name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full px-4 py-3 rounded-lg bg-white"
                                            placeholder="First name"
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-white mb-2">Last name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full px-4 py-3 rounded-lg bg-white"
                                            placeholder="Last name"
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-white mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg bg-white"
                                        placeholder="you@company.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-white mb-2">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        className="w-full px-4 py-3 rounded-lg bg-white"
                                        placeholder="Company Name"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-white mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white"
                                        placeholder="Leave us a message..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        className="h-4 w-4 rounded border-gray-300"
                                        checked={formData.agreeToPrivacy}
                                        onChange={(e) => setFormData({ ...formData, agreeToPrivacy: e.target.checked })}
                                    />
                                    <label htmlFor="privacy" className="ml-2 text-white">
                                        You agree to our friendly{' '}
                                        <a href="#" className="underline">privacy policy</a>.
                                    </label>
                                </div>

                                {submitStatus.message && (
                                    <div className={`p-4 rounded-lg ${submitStatus.type === 'success'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-700'
                                        }`}>
                                        {submitStatus.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-secondary hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send message'}
                                </button>
                            </form>
                        ) : (
                            <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-white mb-2">First name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full px-4 py-3 rounded-lg bg-white"
                                            placeholder="First name"
                                            value={appointmentData.firstName}
                                            onChange={(e) => setAppointmentData({ ...appointmentData, firstName: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-white mb-2">Last name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full px-4 py-3 rounded-lg bg-white"
                                            placeholder="Last name"
                                            value={appointmentData.lastName}
                                            onChange={(e) => setAppointmentData({ ...appointmentData, lastName: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="appointmentEmail" className="block text-white mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="appointmentEmail"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white"
                                        placeholder="you@example.com"
                                        value={appointmentData.email}
                                        onChange={(e) => setAppointmentData({ ...appointmentData, email: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="date" className="block text-white mb-2">Preferred Date</label>
                                    <input
                                        type="date"
                                        id="date"
                                        required
                                        min={minDate}
                                        className="w-full px-4 py-3 rounded-lg bg-white"
                                        value={appointmentData.date}
                                        onChange={(e) => setAppointmentData({ ...appointmentData, date: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="time" className="block text-white mb-2">Preferred Time</label>
                                    <select
                                        id="time"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white"
                                        value={appointmentData.time}
                                        onChange={(e) => setAppointmentData({ ...appointmentData, time: e.target.value })}
                                    >
                                        <option value="">Select a time</option>
                                        <option value="09:00">9:00 AM</option>
                                        <option value="10:00">10:00 AM</option>
                                        <option value="11:00">11:00 AM</option>
                                        <option value="12:00">12:00 PM</option>
                                        <option value="14:00">2:00 PM</option>
                                        <option value="15:00">3:00 PM</option>
                                        <option value="16:00">4:00 PM</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="purpose" className="block text-white mb-2">Purpose of Meeting</label>
                                    <textarea
                                        id="purpose"
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg bg-white"
                                        placeholder="Please briefly describe the purpose of your visit..."
                                        value={appointmentData.purpose}
                                        onChange={(e) => setAppointmentData({ ...appointmentData, purpose: e.target.value })}
                                    />
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="appointmentPrivacy"
                                        required
                                        className="h-4 w-4 rounded border-gray-300"
                                        checked={appointmentData.agreeToPrivacy}
                                        onChange={(e) => setAppointmentData({ ...appointmentData, agreeToPrivacy: e.target.checked })}
                                    />
                                    <label htmlFor="appointmentPrivacy" className="ml-2 text-white">
                                        You agree to our friendly{' '}
                                        <a href="#" className="underline">privacy policy</a>.
                                    </label>
                                </div>

                                {submitStatus.message && (
                                    <div className={`p-4 rounded-lg ${submitStatus.type === 'success'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-700'
                                        }`}>
                                        {submitStatus.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-secondary hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Scheduling...' : 'Schedule Appointment'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
