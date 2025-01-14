import React from "react";

const BrochureDownloads = () => {
  // Example brochure data (You can replace this with your actual data)
  const brochureCategories = [
    {
      category: "Water Treatment",
      brochures: [
        { name: "1 - DOSE - CL Smart digital chlorine dosing", pdf: "brochure1_compressed.pdf", thumbnail: "brochure1.webp" },
        { name: "Genox® Smart Digital Chlorine Dioxide Generator", pdf: "brochure2_compressed.pdf", thumbnail: "brochure2.webp" },
        { name: "ACF - Activated Carbon Filter", pdf: "brochure3_compressed.pdf", thumbnail: "brochure3.webp" },
        { name: "Capacitive Electro Desalination", pdf: "brochure4_compressed.pdf", thumbnail: "brochure4.webp" },
        // { name: "", pdf: "brochure5_compressed.pdf", thumbnail: "brochure5.webp" },
        { name: "I - DOSE - CT Smart digital chemical dosing", pdf: "brochure6_compressed.pdf", thumbnail: "brochure6.webp" },
        { name: "Lamella Clarifier", pdf: "brochure7_compressed.pdf", thumbnail: "brochure7.webp" },
        { name: "Polymix® - Poly-electrolyte Solution Preparation and Dosing System", pdf: "brochure8_compressed.pdf", thumbnail: "brochure8.webp" },
        { name: "Closed Loop Desal Reverse Osmosis RO-Matrix", pdf: "brochure9_compressed.pdf", thumbnail: "brochure9.webp" },
        { name: "TURBILOC® ACTIVE MULTI MEDIA FILTER", pdf: "brochure10_compressed.pdf", thumbnail: "brochure10.webp" },
        { name: "Auto- Water Softener", pdf: "brochure11_compressed.pdf", thumbnail: "brochure11.jpeg" },
        { name: "Zero Liquid Discharge", pdf: "brochure12_compressed.pdf", thumbnail: "brochure12.jpeg" },
        { name: "QUICK CYCLE AUTOMATIC D.M PLANT", pdf: "brochure13_compressed.pdf", thumbnail: "brochure13.jpeg" },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <div className="space-y-12">
        {brochureCategories.map((category) => (
          <div key={category.category}>
            {/* <h2 className="text-2xl font-semibold text-text-color mb-4">{category.category}</h2> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {category.brochures.map((brochure) => (
                <div
                  key={brochure.pdf}
                  className="bg-white shadow-lg rounded-lg p-6 text-cente flex flex-col items-center justify-center gap-3"
                >
                  <img className="h-64 w-fit rounded-xl" src={`/brochuresp/thumbnails/${brochure.thumbnail}`} />
                  <h3 className="text-center text-xl font-medium text-text-color mb-2">{brochure.name}</h3>
                  <a
                    href={`/brochuresp/pdfs/${brochure.pdf}`}
                    download
                  >
                    Download Brochure PDF
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrochureDownloads;
