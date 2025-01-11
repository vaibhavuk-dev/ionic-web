"use client"
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: '',
        agreeToPrivacy: false
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="w-full relative bg-white mx-auto  container">
            <h1 className="text-4xl font-bold text-textcolorDark mb-8">Chat to our friendly team</h1>
            <p className="text-textcolor mb-12">We'd love to hear from you. Please fill out this form or shoot us an email.</p>

            <div className="w-full flex gap-12">
                {/* Contact Methods */}
                <div className='w-1/4 h-full flex flex-col gap-12'>
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
                            <p className="text-textcolor mb-2">Mon-Fri from 8am to 5pm.</p>
                            <a href="tel:020-27475272" className="text-primary hover:underline">020-27475272</a><br />
                            <a href="tel:8275486263" className="text-primary hover:underline">8275486263</a>
                        </div>

                        {/* Office */}
                        <div>
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
                                No 1, 5 & 12, Ground Floor, B Wing, Mahalaxmi Heights,<br />
                                Old Mumbai - Pune Hwy, next to Keys Hotel,<br />
                                Pimpri Colony, Pimpri-Chinchwad,<br />
                                Maharashtra 411019
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-1/4">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15122.922505541159!2d73.79250328511964!3d18.63118198564944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b84e62f8c169%3A0xf6df110a3e44ab98!2sIonic%20Engineering%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1716738071408!5m2!1sen!2sin" 
                            className="w-full h-full" 
                            loading="lazy"
                            style={{ height: '100%' }}
                        ></iframe>
                    </div>

                {/* Contact Form */}
                <div className="w-1/2 bg-primary rounded-2xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
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

                        <button
                            type="submit"
                            className="w-full bg-secondary hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
