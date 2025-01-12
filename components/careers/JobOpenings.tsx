"use client"
import Link from 'next/link';

const JobOpenings = () => {
    return (
        <section className="pt-8">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-8">
                    Current Job Openings
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Job 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Technical Support Engineer</h3>
                        <p className="text-gray-700 mb-4">No of openings: X</p>
                        <Link href="/job-description/technical-support">
                            <p className="text-blueb-600 hover:underline">Download Job Description</p>
                        </Link>
                    </div>

                    {/* Job 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Design Engineer</h3>
                        <p className="text-gray-700 mb-4">No of openings: X</p>
                        <Link href="/job-description/design-engineer">
                            <p className="text-blueb-600 hover:underline">Download Job Description</p>
                        </Link>
                    </div>

                    {/* Job 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Electrical and Automation Engineer</h3>
                        <p className="text-gray-700 mb-4">No of openings: X</p>
                        <Link href="/job-description/electrical-automation">
                            <p className="text-blueb-600 hover:underline">Download Job Description</p>
                        </Link>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <h3 className="text-xl font-semibold mb-4">How to Apply:</h3>
                    <p className="text-gray-700 mb-4">
                        Interested candidates can apply by sending their resume and cover letter to
                        <a href="mailto:commercial@ionic.co.in" className="text-blueb-600"> commercial@ionic.co.in</a> or click the
                        <span className="font-semibold text-blueb-600"> “Apply Now”</span> button below to submit your application.
                    </p>
                    {/* <Link href="/apply">
            <p className="bg-blueb-600 text-white py-2 px-6 rounded-lg hover:bg-blueb-700">
              Apply Now
            </p>
          </Link> */}
                </div>

                <div className="mt-16 flex gap-5">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Internship Programs</h3>
                        <p className="text-gray-700 mb-8">
                            We also offer internship programs for students and graduate training programs for recent graduates interested in pursuing a career in water and wastewater treatment. These programs are designed to provide you with hands-on experience in the field, helping you build the skills needed to succeed in the industry.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Join Our Team</h3>
                        <p className="text-gray-700 mb-8">
                            At Ionic, we’re driven by a common goal: to make a difference in water management and sustainability. If you are passionate about water treatment and want to contribute to creating efficient, sustainable solutions, we invite you to join our team.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobOpenings;
