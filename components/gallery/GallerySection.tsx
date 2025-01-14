"use client"

import React, { useState } from 'react';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'ced', label: 'CED' },
    { id: 'dm', label: 'DM' }
    // Add more filters as needed
  ];

  const galleryItems = [
    {
      category: "ced",
      images: [
        "/galleryp/ced/ced1.webp",
        "/galleryp/ced/ced2.webp",
        "/galleryp/ced/ced3.webp",
        "/galleryp/ced/ced4.webp",
        "/galleryp/ced/ced5.webp",
        "/galleryp/ced/ced6.webp",
        "/galleryp/ced/ced7.webp",
        "/galleryp/ced/ced8.webp"
      ]
    },
    {
      category: "dm",
      images: [
        "/galleryp/dm/dm1.webp",
        "/galleryp/dm/dm3.webp",
        "/galleryp/dm/dm5.webp",
      ]
    }
    // Add more categories and their images as needed
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeFilter === filter.id
                  ? 'bg-blue-700 text-white'
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
              item.images.map((image, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64">
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))
            ))}
        </div>
      </div>
    </div>
  );
}
