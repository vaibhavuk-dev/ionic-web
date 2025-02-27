"use client"

import React, { useState } from 'react';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'clo2', label: 'Genox® Smart Digital Chlorine Dioxide Generator' },
    { id: 'zld', label: 'Zero Liquid Discharge' },
    { id: 'ced', label: 'Capacitive Electro Desalination (CED)' },
    { id: 'dm', label: 'Quick Cycle Automatic DM Plant' },
    // { id: 'drum', label: '' },
    { id: 'lamella', label: 'Lamella Clarifier' },
    { id: 'polymix', label: 'Polymix® - Poly-electrolyte Solution Preparation and Dosing System' },
    { id: 'ro', label: 'Reverse Osmosis (RO) System' },
    // Add more filters as needed
  ];

  const galleryItems = [
    {
      category: "ced",
      images: [
        "/galleryp/ced/ced_1.webp",
        "/galleryp/ced/ced_2.webp",
        "/galleryp/ced/ced_3.webp",
        "/galleryp/ced/ced_4.webp",
        "/galleryp/ced/ced_5.webp",
        "/galleryp/ced/ced_6.webp",
        "/galleryp/ced/ced_7.webp",
        "/galleryp/ced/ced_8.webp"
      ]
    },
    {
      category: "clo2",
      images: [
        "/galleryp/clo2/clo2_1.webp",
        "/galleryp/clo2/clo2_2.webp",
        "/galleryp/clo2/clo2_3.webp",
        "/galleryp/clo2/clo2_4.webp",
        "/galleryp/clo2/clo2_5.webp",
        "/galleryp/clo2/clo2_6.webp",
        "/galleryp/clo2/clo2_7.webp",
        "/galleryp/clo2/clo2_8.webp",
        "/galleryp/clo2/clo2_9.webp",
        "/galleryp/clo2/clo2_10.webp",
        "/galleryp/clo2/clo2_11.webp",
        "/galleryp/clo2/clo2_12.webp"
      ]
    },
    {
      category: "dm",
      images: [
        "/galleryp/dm/dm_1.webp",
        "/galleryp/dm/dm_2.webp",
        "/galleryp/dm/dm_3.webp",
        "/galleryp/dm/dm_4.webp",
        "/galleryp/dm/dm_5.webp"
      ]
    },
    {
      category: "drum",
      images: [
        "/galleryp/drum/drum_1.webp"
      ]
    },
    {
      category: "lamella",
      images: [
        "/galleryp/lamella/lamella_1.webp",
        "/galleryp/lamella/lamella_2.webp",
        "/galleryp/lamella/lamella_3.webp",
        "/galleryp/lamella/lamella_4.webp",
        "/galleryp/lamella/lamella_5.webp",
        "/galleryp/lamella/lamella_6.webp",
        "/galleryp/lamella/lamella_7.webp"
      ]
    },
    {
      category: "polymix",
      images: [
        "/galleryp/polymix/polymix_1.webp",
        "/galleryp/polymix/polymix_2.webp",
        "/galleryp/polymix/polymix_3.webp",
        "/galleryp/polymix/polymix_4.webp",
        "/galleryp/polymix/polymix_5.webp",
      ]
    },
    {
      category: "ro",
      images: [
        "/galleryp/ro/ro_1.webp",
        "/galleryp/ro/ro_2.webp",
        "/galleryp/ro/ro_3.webp",
        "/galleryp/ro/ro_4.webp",
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
    },
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
                    src="/logo/ionic_logo.png"
                    className='absolute bottom-2 right-2 h-10 bg-white rounded p-2'
                    />
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
