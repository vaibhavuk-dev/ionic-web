// import Link from 'next/link';
// import React from 'react';

// const TreatmentCard = ({ image, title, description }: any) => {
//   return (
//     <div className="cursor-pointer bg-white border border-gray-200 rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-lg">
//       <div className="flex space-x-4 p-4">
//         <img 
//           src={image} 
//           alt={title} 
//           className="w-32 h-24 object-cover rounded-md"
//         />
//         <div className="flex-1">
//           <h3 className="text-lg font-semibold text-textcolorDark mb-2">{title}</h3>
//           <p className="text-textcolor text-sm mb-4">{description}</p>
//           <div className="flex justify-end">
//             <Link href="/products/1" className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition-colors">
//               View Details
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function ProductsGrid () {
//   const sections = [
//     {
//       title: "Waste Water Treatment",
//       cards: Array(4).fill({
//         title: "Nanofilteration",
//         description: "The desalination plant Fluence provided via a BOOT contract supplies fresh water.",
//         image: "/products/product1.png" // Replace with actual image path
//       })
//     },
//     {
//       title: "Zero Liquid Discharge",
//       cards: Array(4).fill({
//         title: "Chlorine Dioxide Generator", 
//         description: "The desalination plant Fluence provided via a BOOT contract supplies fresh water.",
//         image: "/products/product1.png" // Replace with actual image path
//       })
//     },
//     {
//       title: "Industrial Waste Water Treatment",
//       cards: Array(6).fill({
//         title: "Eutectic Freeze Crystallization",
//         description: "The desalination plant Fluence provided via a BOOT contract supplies fresh water.",
//         image: "/products/product1.png" // Replace with actual image path
//       })
//     }
//   ];

//   return (
//     <div className="w-full">
//       {sections.map((section, index) => (
//         <div key={index} className="mb-16 last:mb-0">
//           <h2 className="text-3xl font-bold text-textcolorDark mb-8">{section.title}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {section.cards.map((card, cardIndex) => (
//               <TreatmentCard
//                 key={cardIndex}
//                 image={card.image}
//                 title={card.title}
//                 description={card.description}
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };


import React, { useState } from 'react';

export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState('water-treatment');
  
  const products = [
    {
      name: "Oil-Loc",
      tagline: "Oil-Free Water: The Absolute Choice for Clarity",
      category: "water-treatment",
      description: "Our fully automatic Oil-Loc system is compact, reliable, and efficient, ensuring seamless oil-water separation with a long operational life. Designed for durability and precision, it delivers consistent results for industrial and commercial applications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      name: "Silica-Loc",
      tagline: "Silica Solved: Precision Treatment, Absolute Results",
      category: "water-treatment",
      description: "Silica-Loc is a compact, fully automatic solution for efficient silica removal. Engineered for reliability and long-term performance, it provides consistent and effective treatment, catering to various water management needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
    // Add more products similarly
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className="p-8">
                <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-lg p-4 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                
                <p className="text-lg font-medium text-blue-600 mb-4">
                  {product.tagline}
                </p>
                
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>
                
                <button className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors duration-300">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}