import React from "react";

const BrochureDownloads = () => {
  // Example brochure data (You can replace this with your actual data)
  const brochureCategories = [
    {
      category: "Water Treatment",
      brochures: [
        { name: "1 - DOSE - CL Smart digital chlorine dosing", pdf: "brochure1.pdf", thumbnail: "brochure1.jpg" },
        { name: "Genox® Smart Digital Chlorine Dioxide Generator", pdf: "brochure2.pdf", thumbnail: "brochure2.jpg" },
        { name: "ACF - Activated Carbon Filter", pdf: "brochure3.pdf", thumbnail: "brochure3.jpg" },
        { name: "Capacitive Electro Desalination", pdf: "brochure4.pdf", thumbnail: "brochure4.jpg" },
        // { name: "", pdf: "brochure5.pdf", thumbnail: "brochure5.jpg" },
        { name: "I - DOSE - CT Smart digital chemical dosing", pdf: "brochure6.pdf", thumbnail: "brochure6.jpg" },
        { name: "Lamella Clarifier", pdf: "brochure7.pdf", thumbnail: "brochure7.jpg" },
        { name: "Polymix® - Poly-electrolyte Solution Preparation and Dosing System", pdf: "brochure8.pdf", thumbnail: "brochure8.jpg" },
        { name: "Closed Loop Desal Reverse Osmosis RO-Matrix", pdf: "brochure9.pdf", thumbnail: "brochure9.jpg" },
        { name: "TURBILOC® ACTIVE MULTI MEDIA FILTER", pdf: "brochure10.pdf", thumbnail: "brochure10.jpg" },
        { name: "Auto- Water Softener", pdf: "brochure11.pdf", thumbnail: "brochure11.jpg" },
        { name: "Zero Liquid Discharge", pdf: "brochure12.pdf", thumbnail: "brochure12.jpg" },
        { name: "QUICK CYCLE AUTOMATIC D.M PLANT", pdf: "brochure13.pdf", thumbnail: "brochure13.jpg" },
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
