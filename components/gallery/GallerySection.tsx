"use client"

import React, { useState } from 'react';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'water', label: 'Water Treatment' },
    { id: 'wastewater', label: 'Wastewater' },
    { id: 'installations', label: 'Installations' },
    { id: 'maintenance', label: 'Maintenance' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Industrial Water Treatment Plant",
      category: "water",
      image: "/casestudy/cs2.png",
      description: "State-of-the-art water treatment facility with 500,000 L/day capacity",
      location: "Mumbai, India"
    },
    {
      id: 2,
      title: "Wastewater Recycling System",
      category: "wastewater",
      image: "/casestudy/cs3.png",
      description: "Advanced recycling system for industrial wastewater management",
      location: "Delhi, India"
    },
    {
      id: 3,
      title: "Municipal Water Project",
      category: "installations",
      image: "/casestudy/cs4.png",
      description: "Large-scale municipal water treatment installation",
      location: "Pune, India"
    },
    {
      id: 4,
      title: "Industrial Water Treatment Plant",
      category: "water",
      image: "/casestudy/cs2.png",
      description: "State-of-the-art water treatment facility with 500,000 L/day capacity",
      location: "Mumbai, India"
    },
    {
      id: 5,
      title: "Wastewater Recycling System",
      category: "wastewater",
      image: "/casestudy/cs3.png",
      description: "Advanced recycling system for industrial wastewater management",
      location: "Delhi, India"
    },
    {
      id: 6,
      title: "Municipal Water Project",
      category: "installations",
      image: "/casestudy/cs4.png",
      description: "Large-scale municipal water treatment installation",
      location: "Pune, India"
    },
    // Add more gallery items as needed
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        {/* <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-textcolorDark mb-4">
            Our Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ionic Engineering Technology Pvt. Ltd. pioneers ISO-certified water and wastewater 
            treatment solutions with over 35 years of expertise. Led by industry veterans, 
            we offer tailored services, emphasizing quality, performance, and sustainability.
          </p>
        </div> */}

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeFilter === filter.id
                  ? 'bg-blueb-700 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems
            .filter(item => activeFilter === 'all' || item.category === activeFilter)
            .map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-textcolorDark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg 
                      className="w-4 h-4 mr-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {item.location}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}