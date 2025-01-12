import React from 'react';
import { 
  Check, 
  Factory, 
  Activity, 
  Award, 
  Zap, 
  CheckCircle2
} from 'lucide-react';

const ProductPage = () => {
  const applications = [
    "Power Plants & Refineries",
    "Pharmaceutical Industries",
    "Chemical Processing Plants",
    "Food & Beverage Industries",
    "Electronics Manufacturing",
    "Textile Industries"
  ];

  const features = [
    {
      title: "Fully Automatic Operation",
      description: "Minimal operator intervention required with automated regeneration cycles"
    },
    {
      title: "Compact Design",
      description: "Space-saving layout ideal for facilities with limited floor space"
    },
    {
      title: "Quick Regeneration",
      description: "Faster turnaround times with optimized regeneration process"
    },
    {
      title: "Energy Efficient",
      description: "Lower operating costs through optimized resource utilization"
    }
  ];

  const productRanges = [
    "DM-1000: 1000 liters/hour",
    "DM-2000: 2000 liters/hour",
    "DM-5000: 5000 liters/hour",
    "DM-10000: 10000 liters/hour"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Quick Cycle Auto DM Plant
        </h1>
        <p className="text-xl text-blue-600 italic mb-4">
          "Quick, Clean, and Reliable: Demineralization Made Simple"
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Quick Cycle Auto DM Plant offers fully automatic, compact, and efficient demineralization. 
          Its reliable design ensures consistent performance and long-lasting operation in industrial 
          and commercial settings.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
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
          {applications.map((app, index) => (
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
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Check className="text-green-500" />
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
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
        <div className="grid md:grid-cols-2 gap-4">
          {productRanges.map((range, index) => (
            <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg border">
              <Zap className="text-blue-600 w-5 h-5" />
              <span>{range}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;