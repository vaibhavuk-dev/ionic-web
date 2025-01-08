import React from 'react';

export default function ProductHeroCard () {
  return (
    <div className="mx-32 mt-12 bg-blueb-gradient overflow-hidden rounded-tl-3xl rounded-br-3xl">
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Left Content Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Chlorine Dioxide Generator
          </h1>
          
          <p className="text-white/90 text-lg mb-10 leading-relaxed">
            Enhance your water treatment process with Ionic&s Quick Cycle Fully Automatic Demineralises, 
            the ultimate solution for efficient and sustainable water demineralization. Designed to meet 
            the rising demand for minimal waste and compliance with environmental regulations, these advanced 
            demineralizes use proprietary 5th Generation ion exchange resin technology.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors">
              Contact us
            </button>
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Send Enquiry
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="h-[400px] md:h-auto">
          <img
            src="/products/product1.png" // Replace with actual image path
            alt="Chlorine Dioxide Generator System"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};