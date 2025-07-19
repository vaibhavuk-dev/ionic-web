// components/product-page/WhyAutoPlant.tsx
import { Users, Clock, AlertTriangle, Wrench } from 'lucide-react';

const problems = [
    { icon: Users, title: 'High Labor Costs', description: 'Requires a full team per shift just to manage complex valve operations.' },
    { icon: Clock, title: 'Extended Downtime', description: 'A single regeneration cycle can take 5-8 hours, halting production.' },
    { icon: AlertTriangle, title: 'Significant Water Wastage', description: 'Outdated processes lead to massive wastage of rinse and drain water.' },
    { icon: Wrench, title: 'High Maintenance & Corrosion', description: 'Manual plants often use M.S. vessels that corrode and require constant upkeep.' }
];

export function WhyAutoPlant() {
    return (
        <section className="bg-gray-50">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-blue-900">The Problem with Manual Plants: Why You Need Automation</h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Traditional, manually operated D.M. plants are a major drain on resources, leading to high costs, significant wastage, and operational bottlenecks. The IONIC Quick Cycle Auto D.M. Plant was engineered to solve these challenges.
                    </p>
                </div>
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((problem) => (
                        <div key={problem.title} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                            <problem.icon className="h-10 w-10 text-red-500 mb-4" />
                            <h3 className="font-semibold text-lg text-gray-800">{problem.title}</h3>
                            <p className="mt-1 text-gray-500 text-sm">{problem.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}