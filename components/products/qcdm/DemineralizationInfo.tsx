// components/product-page/DemineralizationInfo.tsx
import { Droplets, Factory, TestTube, Cpu } from 'lucide-react';

const applications = [
  { icon: Factory, text: 'Power Plants & Boilers' },
  { icon: TestTube, text: 'Pharmaceuticals & Laboratories' },
  { icon: Cpu, text: 'Electronics & Semiconductors' },
];

export function DemineralizationInfo() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-900">
            What is Demineralization and Why Does It Matter?
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Demineralization is a water purification process focused on removing dissolved mineral salts and ions. Unlike simple filtration, it targets charged ions like Calcium, Magnesium, and Chlorides. The result is high-purity demineralized (D.M.) water, a critical component in many industrial applications where mineral deposits can cause significant problems.
          </p>
        </div>
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
            <Droplets className="mr-3 text-blue-500" />
            Key Industrial Applications
          </h3>
          <ul className="space-y-3">
            {applications.map((app) => (
              <li key={app.text} className="flex items-center text-gray-700">
                <app.icon className="h-5 w-5 mr-3 text-blue-500 flex-shrink-0" />
                {app.text}
              </li>
            ))}
             <li className="flex items-center text-gray-700 font-medium">... and many more.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}