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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11h2m-2 4h2m-4-8h2M7 7h10V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2zm0 0v10a2 2 0 002 2h6a2 2 0 002-2V7H7z" />
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
    },
    {
      name: "Nanofiltration",
      tagline: "Fine Filtration for an Absolutely Clear Choice",
      category: "water-treatment",
      description: "Our nanofiltration systems are designed to be fully automatic, space-saving, and highly efficient. Built for durability and reliability, they ensure long-term performance, delivering superior filtration for a wide range of applications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m6 0v2M9 3v2m6 0v2m-3 3h.01M9 19a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v10a2 2 0 01-2 2H9z" />
        </svg>
      )
    },
    {
      name: "Ultrafiltration",
      tagline: "Ultra Clarity, Absolute Confidence",
      category: "water-treatment",
      description: "Ultrafiltration systems offer fully automatic operation in a compact and robust design. With exceptional efficiency and a long service life, these systems provide reliable filtration for clear and safe water.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    {
      name: "Polymix Dosing System",
      tagline: "Perfectly Mixed, Perfectly Dosed: The Clear Choice",
      category: "water-treatment",
      description: "The Polymix Dosing System is fully automatic, compact, and engineered for precision dosing. Its reliable design ensures accurate performance and long-lasting operation for demanding dosing applications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      name: "Seawater Desalination",
      tagline: "Turning Seawater into Freshwater: The Absolute Solution",
      category: "water-treatment",
      description: "Our seawater desalination systems are fully automatic, compact, and designed for high efficiency. Built for reliability and long life, they provide a sustainable solution for converting seawater into freshwater.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    // Continuing with the same pattern for remaining products...
    {
      name: "Quick Cycle Auto DM Plant",
      tagline: "Quick, Clean, and Reliable: Demineralization Made Simple",
      category: "water-treatment",
      description: "The Quick Cycle Auto DM Plant offers fully automatic, compact, and efficient demineralization. Its reliable design ensures consistent performance and long-lasting operation in industrial and commercial settings.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    // Continuing the products array...
    {
      name: "Hi-Purity Water Systems",
      tagline: "Uncompromised Purity: The Absolute Standard for High Performance",
      category: "water-treatment",
      description: "Hi-Purity Water Systems are compact, fully automatic, and engineered for precision. With unmatched efficiency and durability, these systems deliver consistent, high-quality water for critical applications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: "Brackish Water Desalination",
      tagline: "Freshwater from Brackish Sources: The Clear Choice for Sustainability",
      category: "water-treatment",
      description: "Our brackish water desalination systems are fully automatic, efficient, and compact. Designed for reliability and longevity, they deliver consistent performance in converting brackish water to freshwater.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      name: "Closed Loop Desal RO Matrix",
      tagline: "Closed Loop, Open Possibilities: The Smart RO Solution",
      category: "water-treatment",
      description: "The Closed Loop Desal RO Matrix is a fully automatic, compact, and energy-efficient solution. Its robust design ensures reliable, long-term operation for advanced desalination needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      name: "Hot Water Generation Systems",
      tagline: "Efficient Heating, Absolute Performance",
      category: "water-treatment",
      description: "Our Hot Water Generation Systems are fully automatic, compact, and designed for optimal efficiency. Built for reliability and durability, they ensure consistent and long-lasting performance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      name: "I-Dose Chemical Dosing System",
      tagline: "Smart Dosing, Absolute Control",
      category: "water-treatment",
      description: "The I-Dose Chemical Dosing System offers fully automatic, compact, and precise dosing solutions. Reliable and long-lasting, it ensures accuracy and efficiency in chemical dosing applications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      name: "Technology for Ammonia Removal",
      tagline: "Clear Solutions for Ammonia-Free Water",
      category: "water-treatment",
      description: "Our ammonia removal technology is fully automatic, efficient, and compact. Designed for reliability and longevity, it provides effective ammonia removal for clean and safe water.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: "Capacitive Electro Desalination",
      tagline: "Effortless Desalination, Absolute Efficiency",
      category: "water-treatment",
      description: "Capacitive Electro Desalination systems are fully automatic, compact, and energy-efficient. Built for long-term reliability, they deliver innovative solutions for sustainable water desalination.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      name: "Turbiloc Active Media Filtration",
      tagline: "Turbid Water In, Crystal Clear Out: The Turbiloc Promise",
      category: "water-treatment",
      description: "Turbiloc Active Media Filtration systems are fully automatic, compact, and highly efficient. With a reliable design and long life, they provide consistent filtration for crystal-clear water.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      )
    },
    {
      name: "Lamella Inclined Plate Clarifier",
      tagline: "Space-Saving Design, Crystal-Clear Results",
      category: "water-treatment",
      description: "The Lamella Inclined Plate Clarifier is compact, fully automatic, and engineered for high efficiency. Its robust design ensures reliable, long-lasting performance for effective clarification.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      name: "Genox Smart Digital Chlorine Dioxide Generator",
      tagline: "Smarter Generation, Cleaner Water: The Genox Guarantee",
      category: "water-treatment",
      description: "The Genox Smart Digital Chlorine Dioxide Generator is a fully automatic, compact, and efficient disinfection solution. Built for reliability and long service life, it ensures precise and consistent chlorine dioxide generation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <div className="">
      <div className="mx-auto w-full">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="cursor-pointer group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-blueb-950"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blueb-500 to-blueb-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

              <div className="p-8">
                <div className="h-16 w-16 bg-blueb-100 text-blueb-600 rounded-lg p-4 mb-6 group-hover:bg-blueb-600 group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-semibold text-blueb-950 mb-2">
                  {product.name}
                </h3>

                <p className="text-lg font-medium text-blueb-600 mb-4">
                  {product.tagline}
                </p>

                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>

                <button className="inline-flex items-center text-blueb-600 font-semibold group-hover:text-blueb-800 transition-colors duration-300">
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