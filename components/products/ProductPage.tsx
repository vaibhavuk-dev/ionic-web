"use client"
import React from 'react';
import {
  Check,
  Factory,
  Activity,
  Award,
  Zap,
  CheckCircle2,
  Settings
} from 'lucide-react';
import { productDataType } from '@/utils/types';
import BlockRenderer from '../BlockRenderer';

export function ProductPage({ productData }: { productData: any }) {
  function renderIcon(title: any): React.ReactNode {
    if (title?.toLowerCase()?.includes("pplication")) {
      return <Factory className="text-blue-600" />;
    } else if (title?.toLowerCase()?.includes("feature")) {
      return <Award className="text-blue-600" />;
    } else if (title?.toLowerCase()?.includes("range")) {
      return <Activity className="text-blue-600" />;
    } else if (title?.toLowerCase()?.includes("options")) {
      return <Settings className="text-blue-600" />;
    } else {
      return <CheckCircle2 className="text-blue-600" />;
    }
  }

  return (
    <div className="py-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {productData?.name}
        </h1>
        <p className="text-xl text-blue-600 italic mb-4">
          {productData?.tagline}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {productData?.shortDescription}
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors" onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}>
          Request Quote
        </button>
      </div>

      {/* Content Sections */}
      <div className="bg-white rounded-lg shadow-sm">
        {productData.sections.map(
          (section: any) =>
            (
              <div key={section.title} className="prose max-w-none sectiongap">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">{renderIcon(section.title)}{section.title}</h2>
                <BlockRenderer content={section?.content} />
              </div>
            )
        )}
      </div>

    </div>
  );
}

export default ProductPage;