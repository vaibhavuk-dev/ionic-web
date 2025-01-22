"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import BlockRenderer from "../BlockRenderer";
import { urlFor } from "@/lib/sanity";

const PIProductPage = ({ productData }: { productData: any }) => {
  // Set the first section as the default active tab
  const [activeTab, setActiveTab] = useState(productData.sections[0]?.title || "");

  return (
    <div className="min-h-[60vh] max-w-7xl mx-auto">
      {/* Product Header */}
      <div className="bg-white shadow-sm">
        <div className="w-full py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product Image */}
            <div className="md:w-1/3">
              <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                <img
                  src={
                    productData.mainImage?.asset
                      ? urlFor(productData.mainImage).url()
                      : "/product-placeholder.jpg"
                  }
                  alt={productData.mainImage?.alt || "Product Image"}
                  className="w-full h-32 object-contain"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="md:w-2/3 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{productData.name}</h1>
                <p className="text-xl text-gray-600 mt-2">{productData.shortDescription}</p>
              </div>

              <div className="flex flex-wrap gap-4">
                {productData.features?.map((feature: string) => (
                  <div key={feature} className="flex items-center gap-2 text-gray-700">
                    <Check size={20} className="text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a href='#contact-form' className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Quote
                </a>
                {/* <a href='/brochure' className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Download Brochure
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="w-full mx-auto px-4 py-12">
        {/* Navigation Tabs */}
        <div className="flex gap-8 border-b border-gray-200 mb-8 overflow-x-auto">
          {productData.sections.map((section: any) => (
            <button
              key={section.title}
              className={`pb-4 px-2 font-medium transition-colors ${
                activeTab === section.title
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(section.title)}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-lg shadow-sm py-6 md:py-8">
          {productData.sections.map(
            (section: any) =>
              activeTab === section.title && (
                <div key={section.title} className="prose max-w-none">
                  <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                  <BlockRenderer content={section?.content} />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default PIProductPage;
