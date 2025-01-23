"use client"
import React, { useState } from "react";
import ContactForm from "../homepage/ContactForm";
import DownloadBrochureForm from "./DownloadBrochureForm";

const BrochureDownloads = () => {
  // Example brochure data (You can replace this with your actual data)
  const brochureCategories = [
    {
      category: "Water Treatment",
      brochures: [
        { name: "1 - DOSE - CL Smart digital chlorine dosing", pdf: "i-dose-cl-chlorine-dosing.pdf", thumbnail: "brochure1.webp" },
        { name: "Genox® Smart Digital Chlorine Dioxide Generator", pdf: "genox-chlorine-dioxide-generator.pdf", thumbnail: "brochure2.webp" },
        { name: "ACF - Activated Carbon Filter", pdf: "activated-carbon-filter.pdf", thumbnail: "brochure3.webp" },
        { name: "Capacitive Electro Desalination", pdf: "capacitive-electro-desalination.pdf", thumbnail: "brochure4.webp" },
        { name: "I - DOSE - CT Smart digital chemical dosing", pdf: "i-dose-ct-chemical-dosing.pdf", thumbnail: "brochure6.webp" },
        { name: "Lamella Clarifier", pdf: "lamella-clarifier.pdf", thumbnail: "brochure7.webp" },
        { name: "Polymix® - Poly-electrolyte Solution Preparation and Dosing System", pdf: "polymix-electrolyte-dosing.pdf", thumbnail: "brochure8.webp" },
        { name: "Closed Loop Desal Reverse Osmosis RO-Matrix", pdf: "closed-loop-ro-matrix.pdf", thumbnail: "brochure9.webp" },
        { name: "TURBILOC® ACTIVE MULTI MEDIA FILTER", pdf: "turbiloc-multi-media-filter.pdf", thumbnail: "brochure10.webp" },
        { name: "Auto- Water Softener", pdf: "auto-water-softener.pdf", thumbnail: "brochure11.jpeg" },
        { name: "Zero Liquid Discharge", pdf: "zero-liquid-discharge.pdf", thumbnail: "brochure12.jpeg" },
        { name: "QUICK CYCLE AUTOMATIC D.M PLANT", pdf: "quick-cycle-dm-plant.pdf", thumbnail: "brochure13.jpeg" },

      ],
    },
  ];

  const [selectedBrochure, setSelectedBrochure] = useState<{name: string, category: string, pdf: string} | null>(null);

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {brochureCategories.map((categoryBrochures) => (
            <div key={categoryBrochures.category}>
              <h2 className="text-3xl font-semibold text-text-color mb-4">{categoryBrochures.category}</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {categoryBrochures.brochures.map((brochure) => (
                  <div
                    key={brochure.pdf}
                    className="bg-white shadow-lg rounded-lg p-6 text-cente flex flex-col items-center justify-center gap-3"
                  >
                    <img className="h-64 w-fit rounded-xl" src={`/brochuresp/thumbnails/${brochure.thumbnail}`} />
                    <h3 className="text-center text-xl font-medium text-text-color mb-2">{brochure.name}</h3>
                    <button
                      // href={`/brochuresp/pdfs/${brochure.pdf}`}
                      onClick={() => setSelectedBrochure({name: brochure?.name, category: categoryBrochures?.category, pdf: brochure?.pdf})}
                      className="text-blueb-700 mt-auto font-semibold"
                    >
                      Download Brochure PDF
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full py-16 gap-16 mx-auto bg-white responsive-padding rounded shadow-md relative">
        <ContactForm />
      </div>
      {
        selectedBrochure && <DownloadBrochureForm isOpen={selectedBrochure !== null} onClose={() => setSelectedBrochure(null)} brochureInfo={selectedBrochure}/>
      }
    </>
  );
};

export default BrochureDownloads;
