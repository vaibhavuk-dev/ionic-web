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

export function ProductPage({productData}: {productData: productDataType}) {
  return (
    <div className="py-8 responsive-padding">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {productData?.name}
        </h1>
        <p className="text-xl text-blue-600 italic mb-4">
          {productData?.tagline}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {productData?.description}
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors" onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}>
          Request Quote
        </button>
      </div>

      {/* Applications Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Factory className="text-blue-600" />
          Applications
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {productData?.applications?.map((app, index) => (
            <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg border">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              <span>{app}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Award className="text-blue-600" />
          Features & Benefits
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {productData?.features_and_benefits?.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold text-md mb-2 flex items-center gap-4">
                <Check className="text-green-500" />
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Product Range Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Activity className="text-blue-600" />
          Product Range
        </h2>
        <div className="space-y-6">
          {/* Range Display */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg border">
              <Zap className="text-blue-600 w-5 h-5" />
              <span>{productData?.product_range?.range}</span>
            </div>
          </div>

          {/* Customization Options */}
          {productData?.product_range?.customizable_based_on_client_needs && (
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Settings className="text-blue-600 w-5 h-5" />
                Customization Options
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {productData?.product_range?.customized_options?.map((option, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg border">
                    <CheckCircle2 className="text-green-500 w-5 h-5" />
                    <span>{option}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ProductPage;