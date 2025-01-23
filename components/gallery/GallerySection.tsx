"use client"

import React, { useState } from 'react';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'ced', label: 'Capacitive Electro Desalination (CED)' },
    { id: 'dm', label: 'Quick Cycle Automatic DM Plant' },
    { id: 'zld', label: 'Zero Liquid Discharge' },
    // Add more filters as needed
  ];

  const galleryItems = [
    {
      category: "ced",
      images: [
        "/galleryp/ced/ced1_img.webp",
        "/galleryp/ced/ced2_img.webp",
        "/galleryp/ced/ced3_img.webp",
        "/galleryp/ced/ced4_img.webp",
        "/galleryp/ced/ced5_img.webp",
        "/galleryp/ced/ced6_img.webp",
        "/galleryp/ced/ced7_img.webp",
        "/galleryp/ced/ced8_img.webp"
      ]
    },
    {
      category: "dm",
      images: [
        "/galleryp/dm/dm1_img.webp",
        "/galleryp/dm/dm2_img.webp",
        "/galleryp/dm/dm3_img.webp",
      ]
    },
    {
      category: "zld",
      images: [
        "/galleryp/zld/zld_1.webp",
        "/galleryp/zld/zld_2.webp",
        "/galleryp/zld/zld_3.webp",
        "/galleryp/zld/zld_4.webp",
        "/galleryp/zld/zld_5.webp",
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
                  className="bg-white rounded-xl overflow-hidden transition duration-300 transform hover:scale-105"
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
