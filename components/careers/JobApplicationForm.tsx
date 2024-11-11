"use client"
import { useState } from 'react';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    city: '',
    country: '',
    positionAppliedFor: '',
    highestDegree: '',
    fieldOfStudy: '',
    currentJobTitle: '',
    currentEmployer: '',
    yearsOfExperience: '',
    resume: null,
    consent: false
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="pt-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Job Application Form</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 gap-4">
            {/* Personal Information */}
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Current Location */}
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-gray-700">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Position Applied For */}
            <div>
              <label className="block text-gray-700">Position Applied For</label>
              <select
                name="positionAppliedFor"
                value={formData.positionAppliedFor}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select Position</option>
                <option value="Technical Support Engineer">Technical Support Engineer</option>
                <option value="Design Engineer">Design Engineer</option>
                <option value="Electrical Engineer">Electrical Engineer</option>
                <option value="Control and Automation Engineer">Control and Automation Engineer</option>
                <option value="HR">HR</option>
                <option value="Accountant">Accountant</option>
                <option value="Fitter">Fitter</option>
              </select>
            </div>

            {/* Educational Background */}
            <div>
              <label className="block text-gray-700">Highest Degree</label>
              <select
                name="highestDegree"
                value={formData.highestDegree}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select Degree</option>
                <option value="Bachelor's">Bachelors</option>
                <option value="Master's">Masters</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700">Field of Study</label>
              <input
                type="text"
                name="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Professional Experience */}
            <div>
              <label className="block text-gray-700">Current/Last Job Title</label>
              <input
                type="text"
                name="currentJobTitle"
                value={formData.currentJobTitle}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-gray-700">Current/Last Employer</label>
              <input
                type="text"
                name="currentEmployer"
                value={formData.currentEmployer}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-gray-700">Years of Experience</label>
              <input
                type="text"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-gray-700">Resume Upload (PDF, DOC, DOCX, Max 5MB)</label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Consent */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="mr-2"
              />
              <label className="text-gray-700">
                I consent to Ionic Engineering Technology Pvt. Ltd. processing my personal data for recruitment purposes in accordance with the privacy policy.
              </label>
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
              >
                Submit Application
              </button>
            </div>
          </div>
        </form>



        <p className="font-italic text-gray-300 text-4xl mt-8">“The only way to do great work is to love what you do.” - Steve Jobs</p>
      </div>
    </section>
  );
};

export default JobApplicationForm;
