"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import BlockRenderer from "../BlockRenderer";
import { urlFor } from "@/lib/sanity";
import DownloadBrochureForm from "../brochures/DownloadBrochureForm";

const PIProductPage = ({ productData }: { productData: any }) => {

  const [selectedBrochure, setSelectedBrochure] = useState(null);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Product Header */}
      <div className="bg-white">
        <div className="w-full py-8">
          <div className="flex flex-col md:flex-row gap-8 w-full">
            {/* Product Image */}
            {/* <div className="">
              <div className="bg-gray-100 rounded-lg w-fit flex items-center justify-center">
                <img
                  src={
                    productData.mainImage?.asset
                      ? urlFor(productData.mainImage).url()
                      : "/product-placeholder.jpg"
                  }
                  alt={productData.mainImage?.alt || "Product Image"}
                  className="w-full h-64 object-contain"
                />
              </div>
            </div> */}

            <div className="w-full rounded-2xl mb-12 flex flex-col md:flex-row gap-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-xl p-8">
              <div className='w-fit flex items-center justify-center'>
                <div className="w-full h-full relative">
                  <img
                    src={productData.mainImage?.asset
                      ? urlFor(productData.mainImage).url()
                      : "/product-placeholder.jpg"}
                    alt={productData.mainImage?.alt || "Product Image"}
                    className="w-full h-full object-contain rounded-2xl shadow-lg border border-blue-100 mb-4"
                  />
                </div>
              </div>
              <div className='w-full flex flex-col justify-center'>
                <h1 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                  {productData.name}
                </h1>
                <p className="text-xl text-blue-700 italic mb-5 font-medium">
                  {productData.tagline}
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {productData.shortDescription ? productData.shortDescription : productData?.sections?.find((section: any) => section.title === "Description")?.content}
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <button
                    onClick={() => setSelectedBrochure({ ...productData?.brochures[0], pdf: productData?.brochures[0].pdf.asset.url })}
                    className="bg-blue-600 text-white px-7 py-2.5 rounded-lg shadow hover:bg-blue-700 transition-all font-semibold text-base flex items-center gap-2"
                  >
                    <Check size={16} />
                    Download Brochure
                  </button>
                  <button
                    className="bg-white border border-blue-600 text-blue-700 px-7 py-2.5 rounded-lg shadow hover:bg-blue-50 transition-all font-semibold text-base"
                    onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Request Quote
                  </button>
                </div>
                {/* <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setSelectedBrochure({ name: productJson.name, category: "Waste Water", pdf: productJson.actions[0].href || "" })}
                    className="bg-blue-600 text-white px-7 py-2.5 rounded-lg shadow hover:bg-blue-700 transition-all font-semibold text-base"
                  >
                    {productJson.actions[0].label}
                  </button>
                  <button
                    className="bg-white border border-blue-600 text-blue-700 px-7 py-2.5 rounded-lg shadow hover:bg-blue-50 transition-all font-semibold text-base"
                    onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    {productJson.actions[1].label}
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="w-full mx-auto px-4">
        {/* Content Sections */}
        <div className="bg-white">
          {productData.sections?.filter((section: any) => section.title !== "Description").map((section: any) => (
            <div key={section.title} className="prose max-w-none mb-12">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <BlockRenderer content={section?.content} />
            </div>
          ))}
        </div>
      </div>

      {/* Brochures */}
      {productData.brochures && <div className="w-full mx-auto px-4">
        <div className="bg-white">
          <h2 className="text-2xl font-semibold mb-4">Download Contents</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {productData.brochures?.map((brochure: any) => (
            <div key={brochure.name} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{brochure.name}</h3>
              <p className="text-gray-600 mb-4">{brochure.category}</p>
              <button onClick={() => setSelectedBrochure({ ...brochure, pdf: brochure.pdf.asset.url })} className="text-blue-600 hover:text-blue-800">Download PDF</button>
            </div>
          ))}
        </div>
      </div>}

      {
        selectedBrochure && <DownloadBrochureForm isOpen={selectedBrochure !== null} onClose={() => setSelectedBrochure(null)} brochureInfo={selectedBrochure} />
      }
    </div>
  );
};

export default PIProductPage;
