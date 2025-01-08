import Link from 'next/link';
import React from 'react';

const TreatmentCard = ({ image, title, description }: any) => {
  return (
    <div className="cursor-pointer bg-white border border-gray-200 rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-lg">
      <div className="flex space-x-4 p-4">
        <img 
          src={image} 
          alt={title} 
          className="w-32 h-24 object-cover rounded-md"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-textcolorDark mb-2">{title}</h3>
          <p className="text-textcolor text-sm mb-4">{description}</p>
          <div className="flex justify-end">
            <Link href="/products/1" className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition-colors">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProductsGrid () {
  const sections = [
    {
      title: "Waste Water Treatment",
      cards: Array(4).fill({
        title: "Nanofilteration",
        description: "The desalination plant Fluence provided via a BOOT contract supplies fresh water.",
        image: "/products/product1.png" // Replace with actual image path
      })
    },
    {
      title: "Zero Liquid Discharge",
      cards: Array(4).fill({
        title: "Chlorine Dioxide Generator", 
        description: "The desalination plant Fluence provided via a BOOT contract supplies fresh water.",
        image: "/products/product1.png" // Replace with actual image path
      })
    },
    {
      title: "Industrial Waste Water Treatment",
      cards: Array(6).fill({
        title: "Eutectic Freeze Crystallization",
        description: "The desalination plant Fluence provided via a BOOT contract supplies fresh water.",
        image: "/products/product1.png" // Replace with actual image path
      })
    }
  ];

  return (
    <div className="w-full">
      {sections.map((section, index) => (
        <div key={index} className="mb-16 last:mb-0">
          <h2 className="text-3xl font-bold text-textcolorDark mb-8">{section.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.cards.map((card, cardIndex) => (
              <TreatmentCard
                key={cardIndex}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};