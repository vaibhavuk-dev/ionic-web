import React from 'react';
import { Droplets, Waves, GitMerge } from 'lucide-react';

export default function SolutionsSection() {
  const solutions = [
    {
      id: 'water-treatment',
      title: {
        main: 'WATER TREATMENT',
        sub: 'SOLUTIONS'
      },
      icon: <Droplets className="w-6 h-6" />,
      image: "/placeholder.jpg",
      description: "Ionic can reduce Capex by intelligent and innovative solutions, reduce water consumption, reduce power, reduce chemicals, reduce consumables and maintenance, increase productivity and reduce waste discharge. Our water treatment solutions are based on value engineering and designed to reduce life cycle cost.",
      imageAlt: "Water treatment facility"
    },
    {
      id: 'waste-water',
      title: {
        main: 'WASTE WATER',
        sub: 'TREATMENT'
      },
      icon: <Waves className="w-6 h-6" />,
      image: "/placeholder.jpg",
      description: "Treating waste water is more difficult than treating water, whether it is Sewage water or Industrial waste water. Our experience in dealing with diverse industries makes it possible to offer techno-economically optimum solution for treating industrial waste water.",
      imageAlt: "Waste water samples"
    },
    {
      id: 'integrated',
      title: {
        main: 'INTEGRATED TOTAL WATER',
        sub: 'SOLUTIONS'
      },
      icon: <GitMerge className="w-6 h-6" />,
      image: "/placeholder.jpg",
      description: "Ionic Provides integrated solution for zero liquid discharge and water recycling system. Ionic can provide evaporators for achieving zero discharge requirement from industries and process using which water can be easily recycled.",
      imageAlt: "Integrated water system diagram"
    }
  ];

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-sky-400">OUR</span>
            <span className="text-blue-700"> SOLUTIONS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-700 mx-auto"></div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div 
              key={solution.id}
              className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-4"
            >
              {/* Image Container */}
              <div className="relative">
                <div className="absolute top-4 left-4 bg-green-500 p-2 rounded-lg text-white">
                  {solution.icon}
                </div>
                <img 
                  src={solution.image} 
                  alt={solution.imageAlt}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-1">
                  {solution.title.main}
                </h3>
                <h4 className="text-lg text-sky-400 mb-4">
                  {solution.title.sub}
                </h4>
                <p className="text-gray-600 text-sm mb-6 line-clamp-4">
                  {solution.description}
                </p>
                <button className="text-blue-700 font-semibold hover:text-sky-400 transition-colors duration-300 flex items-center gap-2">
                  READ MORE
                  <svg 
                    className="w-4 h-4" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
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