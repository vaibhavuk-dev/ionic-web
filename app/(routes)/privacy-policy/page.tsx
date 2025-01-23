import React from 'react';
import Link from 'next/link';
import { Shield, Database, Lock, Mail, RefreshCw } from 'lucide-react';

const PrivacyPolicy = () => {
    const policyUpdated = "23 January 2025";

    const PolicySection = ({ icon: Icon, title, children }: any) => (
        <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center mb-4">
                {Icon && <Icon className="mr-3 text-blueb-700" size={24} />}
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            </div>
            <div className="text-gray-600">{children}</div>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto py-12 px-6">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                {/* <p className="text-gray-600">Last Updated: {policyUpdated}</p> */}
            </div>

            <PolicySection icon={null} title="">
                <p>
                    At IONIC Engineering Technology Pvt. Ltd., we are committed to safeguarding your privacy. This Privacy Policy describes how we collect, use, and protect your personal information. By using our website, you agree to the terms outlined in this policy.
                </p>
            </PolicySection>

            <PolicySection icon={Shield} title="Information We Collect">
                <p>
                    We collect personal information when you interact with us on our website. This may include:<br /><br />

                    Personal Identification Information: Name, email address, phone number, company name, etc.
                    Usage Data: Information on how you interact with our website, including IP addresses, browser type, and usage data.
                    Cookies: We use cookies to enhance user experience. Cookies are small data files that are placed on your device to help us analyze web traffic and provide customized content.
                </p>
            </PolicySection>

            <PolicySection icon={Database} title="How We Use Your Information">
                <p className='pb-4'>We use the collected information for various purposes:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li>To respond to your inquiries, requests, and provide customer support.</li>
                    <li>To improve our website functionality, services, and user experience.</li>
                    <li>To send updates, newsletters, and promotional information (you can opt-out at any time).</li>
                    <li>To comply with legal obligations and resolve any disputes.</li>
                </ul>
            </PolicySection>

            <PolicySection icon={Lock} title="⁠⁠How We Protect Your Data">
                <p>
                    We prioritize the security of your personal data. We use a variety of security technologies and procedures to safeguard your information from unauthorized access, use, or disclosure. This includes encryption and secure server protocols to protect sensitive data.
                </p>
            </PolicySection>

            <PolicySection icon={RefreshCw} title="Sharing of Information">
                <p>
                    We do not share your personal information with third parties except:<br /><br />

                    With trusted service providers who assist us in operating our website and business (e.g., hosting providers, email services), and who are contractually obligated to keep your information confidential.
                    As required by law or to protect our rights, safety, and the public.
                    We do not sell, rent, or lease your personal information to third parties.

                </p>
            </PolicySection>

            <PolicySection icon={RefreshCw} title="Cookies and Tracking Technologies">
                <p>
                    We use cookies and similar tracking technologies to monitor your activity on our website. These technologies help us analyze web traffic, provide personalized content, and improve your browsing experience. You can adjust your browser settings to disable cookies, but this may affect your user experience on our website.
                </p>
            </PolicySection>

            <PolicySection icon={RefreshCw} title="Your Data Rights">
                <p className='pb-4'>We use the collected information for various purposes:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li>Access: Request access to the personal data we hold about you.</li>
                    <li>Update/Correct: Request correction or updates to your personal data.</li>
                    <li>Delete: Request deletion of your personal data, where applicable.</li>
                    <li>Opt-Out: You can opt-out of receiving marketing communications by following the unsubscribe link in our emails or contacting us directly.</li>
                    <li>If you wish to exercise any of these rights, please contact us using the information provided below.</li>
                </ul>
            </PolicySection>

            <PolicySection icon={RefreshCw} title="Changes to this Privacy Policy">
                <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page, with the updated policy effective immediately upon posting. We encourage you to periodically review this policy to stay informed about how we protect your information.
                </p>
            </PolicySection>

            <div className="bg-gray-100 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <Mail className="mr-3 text-blueb-700" size={24} />
                    <h3 className="text-xl font-semibold">Contact Us</h3>
                </div>
                <p>If you have any questions or concerns about this Privacy Policy or the way your personal data is being handled, please contact us at:</p>
                <div className="mt-2">
                    <p>Email: <a href="mailto:contact@ionic.co.in" className="text-blueb-700">contact@ionic.co.in</a></p>
                    <p>Phone: 020-27475272</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;