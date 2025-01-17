import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';

const PIProductPage = ({ product }: any) => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="min-h-screen">
      {/* Product Header */}
      <div className="bg-white shadow-sm">
        <div className="w-full py-8">
          <div className="flex flex-col md:flex-row gap-8 responsive-padding">
            {/* Product Image */}
            <div className="md:w-1/3">
              <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                <img 
                  src="/product-placeholder.jpg" 
                  alt="Product Image"
                  className="w-full object-contain"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="md:w-2/3 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">DAFSense</h1>
                <p className="text-xl text-gray-600 mt-2">DAF Coagulation Controller & Dosing System</p>
              </div>

              <div className="flex flex-wrap gap-4">
                {['pH Control', 'Remote Access', 'Data logging', 'PID controls'].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-gray-700">
                    <Check size={20} className="text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Quote
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="w-full mx-auto px-4 py-12 responsive-padding">
        {/* Navigation Tabs */}
        <div className="flex gap-8 border-b border-gray-200 mb-8">
          {['description', 'applications', 'options'].map((tab) => (
            <button
              key={tab}
              className={`pb-4 px-2 font-medium transition-colors ${
                activeTab === tab 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">
                Pi's DAFSense coagulation and dosing controller is an integrated controller that accepts multiple inputs 
                from multiple sensors including inlet solids pH, and flow. From these measured parameters, the DAFSense 
                outputs a flow proportional coagulation control signal that can go to a coagulant and flocculant dosing pump.
              </p>
              <div className="mt-6 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                    <span>Integrated controller with multiple sensor inputs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                    <span>Flow proportional coagulation control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                    <span>Customizable for each water treatment plant</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Applications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {['Water Treatment', 'Industrial Wastewater', 'Chemical Processing', 'Municipal Treatment'].map((app) => (
                  <div key={app} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{app}</h3>
                    <p className="text-gray-600">
                      Ideal for {app.toLowerCase()} applications requiring precise control and monitoring.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'options' && (
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Available Options</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'pH Control',
                    description: 'Integrated pH monitoring and control capabilities'
                  },
                  {
                    title: 'Remote Access',
                    description: 'Access over LAN or GPRS for remote monitoring and control'
                  },
                  {
                    title: 'Data Logging',
                    description: 'Comprehensive data logging and reporting features'
                  }
                ].map((option) => (
                  <div key={option.title} className="border-b border-gray-200 pb-6 last:border-0">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PIProductPage;