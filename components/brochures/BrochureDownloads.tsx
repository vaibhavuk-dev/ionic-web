import React from "react";

const BrochureDownloads = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Download Our Brochures</h1>
        <p className="text-lg text-text-color mb-8">
          Discover our products and services through our informative brochures. Click on the download links below to get the details.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="/brochure1.jpg" alt="Brochure 1" className="w-full h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold text-text-color mb-2">Water Treatment Solutions</h3>
          <p className="text-sm text-text-color mb-4">Explore our water treatment systems that provide clean, sustainable solutions.</p>
          <a
            href="/brochures/water-treatment.pdf"
            download
            className="inline-block bg-secondary text-white px-6 py-2 rounded-lg hover:bg-secondary-light transition"
          >
            Download Brochure
          </a>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="/brochure2.jpg" alt="Brochure 2" className="w-full h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold text-text-color mb-2">Industrial Waste Water Treatment</h3>
          <p className="text-sm text-text-color mb-4">Get insights into our advanced solutions for industrial waste water treatment.</p>
          <a
            href="/brochures/industrial-waste-water.pdf"
            download
            className="inline-block bg-secondary text-white px-6 py-2 rounded-lg hover:bg-secondary-light transition"
          >
            Download Brochure
          </a>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="/brochure3.jpg" alt="Brochure 3" className="w-full h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold text-text-color mb-2">Hi-Purity Water Systems</h3>
          <p className="text-sm text-text-color mb-4">Discover how our Hi-Purity Water Systems deliver the highest standards of purity.</p>
          <a
            href="/brochures/hi-purity-water.pdf"
            download
            className="inline-block bg-secondary text-white px-6 py-2 rounded-lg hover:bg-secondary-light transition"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrochureDownloads;
