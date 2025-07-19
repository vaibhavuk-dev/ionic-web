// components/product-page/ComparisonSection.tsx
import Image from 'next/image';
import { CheckCircle2, XCircle, Zap, Users, Shield, Package, Wrench, IndianRupee } from 'lucide-react';

const comparisonData = [
    { category: 'Operation & Manpower', icon: Users, manual: 'Full team required (Operator, Labor, Supervisor) for 27+ valve operations.', auto: 'Minimal attention needed. No manual valve operations required.' },
    { category: 'Efficiency & Regeneration', icon: Zap, manual: 'Slow 5-8 hour regeneration. High wastewater output (>41 M³).', auto: 'Rapid 35-45 min cycle. 14 times less wastewater (2.75 M³).' },
    { category: 'Water Quality', icon: Shield, manual: 'Requires a separate, cumbersome mixed bed unit for high purity.', auto: 'Achieves mixed bed quality without the extra unit, simplifying operations.' },
    { category: 'Maintenance & Durability', icon: Wrench, manual: 'Corrosion-prone M.S. vessels need frequent painting & heavy maintenance.', auto: 'Non-corrosive FRP vessels require virtually no maintenance.' },
    { category: 'Installation & Space', icon: Package, manual: 'Huge footprint (5x14 M) plus costly civil work for foundation/sump.', auto: 'Compact footprint (2x1.5 M) with no extra civil work needed.' },
    { category: 'Total Annual Savings', icon: IndianRupee, manual: 'High recurring costs for labor, water, chemicals, and upkeep.', auto: 'Saves over ₹2,80,600 per year in quantifiable costs.' },
];

export function ComparisonSection() {
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-blue-900">The IONIC Advantage: A Clear Comparison</h2>
                <p className="mt-4 text-lg text-gray-600">
                    We treat water <strong className="text-blue-700">"differently"</strong>. See how our Quick Cycle Auto D.M. Plant completely outperforms conventional manual systems.
                </p>
            </div>

            {/* VISUAL COMPARISON SECTION */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="text-center flex flex-col items-center">
                    <h3 className="text-xl font-semibold text-gray-700">❌ Conventional Manual Plant</h3>
                    <div className="relative w-full max-w-[500px] aspect-[1/1] mt-4 rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src="/products/qcdm/manual-dm-plant.png"
                            alt="Conventional Manual D.M. Plant with complex valves"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 500px"
                        />
                    </div>
                </div>
                <div className="text-center flex flex-col items-center">
                    <h3 className="text-xl font-semibold text-gray-700">✅ IONIC Quick Cycle Auto Plant</h3>
                    <div className="relative w-full max-w-[500px] aspect-[1/1] mt-4 rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src="/products/qcdm/auto-dm-plant.jpg"
                            alt="IONIC Quick Cycle Auto D.M. Plant - compact and efficient"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 500px"
                        />
                    </div>
                </div>
            </div>


            {/* DETAILED TEXT COMPARISON */}
            <div className="mt-20 flow-root">
                <div className="-m-2 rounded-xl bg-gray-50 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                    <div className="divide-y divide-gray-200">
                        {comparisonData.map((item) => (
                            <div key={item.category} className="grid md:grid-cols-2 py-6 px-4 gap-x-8 gap-y-4">
                                <div className="flex items-center gap-4">
                                    <item.icon className="h-8 w-8 text-blue-600 flex-shrink-0" />
                                    <h3 className="text-xl font-semibold text-gray-800">{item.category}</h3>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {/* Manual Plant */}
                                    <div className="flex items-start gap-3">
                                        <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-500">Manual Plant</h4>
                                            <p className="text-gray-500 text-sm">{item.manual}</p>
                                        </div>
                                    </div>
                                    {/* Auto Plant */}
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-700">IONIC Auto Plant</h4>
                                            <p className="text-gray-700 text-sm">{item.auto}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}