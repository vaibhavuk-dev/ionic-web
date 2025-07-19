"use client"
import React, { useState } from 'react';
import {
    Check,
    Factory,
    Activity,
    Award,
    Zap,
    CheckCircle2,
    Settings,
    Handshake
} from 'lucide-react';
import BlockRenderer from '../BlockRenderer';
import { productJson } from './data';
import ClientsSection from '../homepage/ClientsSection';
import DownloadBrochureForm from '../brochures/DownloadBrochureForm';

function renderIcon(title: string): React.ReactNode {
    if (title?.toLowerCase()?.includes("application")) {
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

export default function ProductPageTest() {
    const [selectedBrochure, setSelectedBrochure] = useState<{ name: string, category: string, pdf: string } | null>(null);

    return (
        <div className="mt-2 max-w-7xl mx-auto">

            {/* Hero Section */}
            <div className="rounded-2xl mb-12 flex flex-col md:flex-row gap-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-xl p-8">
                <div className='md:w-2/5 w-full flex items-center justify-center'>
                    <div className="w-full relative">
                        <img
                            src={"/galleryp/clo2/clo25.jpg"}
                            alt="Product Image"
                            className="w-full h-full object-cover rounded-2xl shadow-lg border border-blue-100 mb-4"
                        />
                        <div className="absolute inset-0 rounded-2xl mb-4 bg-blue-600 opacity-10 pointer-events-none"></div>
                        {/* <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/MvAFKvBO60g"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="rounded-xl w-full h-64"
                            ></iframe>
                        </div> */}
                    </div>
                </div>
                <div className='md:w-3/5 w-full flex flex-col justify-center'>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                        {productJson.name}
                    </h1>
                    <p className="text-xl text-blue-700 italic mb-5 font-medium">
                        {productJson.tagline}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        {productJson.description}
                    </p>
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

            {/* Why Ionic Section */}
            <div className="bg-blue-50 rounded-2xl shadow-lg px-10 py-8 mb-16 flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 w-full flex items-center justify-center">
                    <Handshake className="w-48 h-48 rounded-lg text-white py-6 bg-blue-600" />
                </div>
                <div className="md:w-2/3 w-full">
                    <h2 className="text-3xl font-bold mb-4 text-blue-800 flex items-center gap-3">
                        <Zap className="text-blue-600" />
                        Why Ionic?
                    </h2>
                    <ul className="list-disc ml-6 text-gray-800 text-lg space-y-2">
                        <li>Decades of expertise in water treatment and disinfection solutions.</li>
                        <li>Cutting-edge technology ensuring safety, efficiency, and reliability.</li>
                        <li>Comprehensive after-sales support and technical assistance.</li>
                        <li>Customizable solutions tailored to your specific requirements.</li>
                        <li>Trusted by leading industries and municipalities across the region.</li>
                    </ul>
                </div>
            </div>

            {/* Features Section */}

            <div className="mb-12 flex flex-col gap-12">
                <h2 className="text-3xl font-bold text-blue-800 text-center gap-3">
                    Key Features & Advantages
                </h2>
                {/* Group 1 */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="md:w-1/2 w-full flex items-center justify-center">
                        <img
                            src="/galleryp/clo2/feat1.jpg"
                            alt="Smart Digital Metering & Production Capacity"
                            className="w-fit  h-64 object-contain rounded-xl shadow border border-blue-100"
                        />
                    </div>
                    <div className="md:w-1/2 w-full flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-blue-800 mb-2 flex items-center gap-3">
                            <Award className="text-blue-600" />
                            Key Features
                        </h2>
                        <ul className="list-disc ml-6 text-gray-800 text-lg space-y-2">
                            <li>Smart Digital Metering pumps for precise chemical dosing.</li>
                            <li>Production capacity variation 10-100%.</li>
                        </ul>
                    </div>
                </div>
                {/* Group 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
                    <div className="md:w-1/2 w-full flex items-center justify-center">
                        <img
                            src="/galleryp/clo2/feat2.jpg"
                            alt="Integrated Dilution & By-pass Assembly"
                            className="w-fit  h-64 object-contain rounded-xl shadow border border-blue-100"
                        />
                    </div>
                    <div className="md:w-1/2 w-full flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-blue-800 mb-2 flex items-center gap-3">
                            <Award className="text-blue-600" />
                            Advanced Control
                        </h2>
                        <ul className="list-disc ml-6 text-gray-800 text-lg space-y-2">
                            <li>Integrated dilution water, precursor chemical flow measurement, monitoring and control.</li>
                            <li>By–pass assembly for dilution of chlorine dioxide with inbuilt static mixer.</li>
                        </ul>
                    </div>
                </div>
                {/* Group 3 */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="md:w-1/2 w-full flex items-center justify-center">
                        <img
                            src="/galleryp/clo2/feat3.png"
                            alt="Online Sensor Integration"
                            className="w-fit  h-64 object-contain rounded-xl shadow border border-blue-100"
                        />
                    </div>
                    <div className="md:w-1/2 w-full flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-blue-800 mb-2 flex items-center gap-3">
                            <Award className="text-blue-600" />
                            Real-time Monitoring
                        </h2>
                        <ul className="list-disc ml-6 text-gray-800 text-lg space-y-2">
                            <li>Integration of online high concentration ClO2 online sensor to monitor ClO2 concentration at the reactor outlet.</li>
                        </ul>
                    </div>
                </div>
                {/* Group 4 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
                    <div className="md:w-1/2 w-full flex items-center justify-center">
                        <img
                            src="/galleryp/clo2/feat4.png"
                            alt="Optimized Reaction Chamber & System"
                            className="w-fit  h-64 object-contain rounded-xl shadow border border-blue-100"
                        />
                    </div>
                    <div className="md:w-1/2 w-full flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-blue-800 mb-2 flex items-center gap-3">
                            <Award className="text-blue-600" />
                            Safety & Construction
                        </h2>
                        <ul className="list-disc ml-6 text-gray-800 text-lg space-y-2">
                            <li>Optimized reaction chamber.</li>
                            <li>Encapsulated Reaction chamber is water submerged and flushed using the dilution water flow to ensure safe generation of ClO2.</li>
                            <li>PVDF reaction chamber with PVDF injection valves and tube.</li>
                            <li>Complete system fabricated on PP skid and frame fully plumbed and wired ready for installation on site.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* GENOX Smart Digital Chlorine Dioxide Generator Section */}
            <div className="bg-white mb-12 flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2 w-full flex items-center justify-center">
                    <img
                        src="/galleryp/clo2/pfd.jpg"
                        alt="GENOX Smart Digital Chlorine Dioxide Generator Diagram"
                        className="w-full max-w-md h-auto object-contain rounded-xl border border-blue-100 shadow"
                    />
                </div>
                <div className="md:w-1/2 w-full flex flex-col gap-4">
                    <h2 className="text-3xl font-bold text-blue-800 mb-2">
                        GENOX - Smart Digital Chlorine Dioxide Generator
                    </h2>
                    <p className="italic text-blue-700 text-lg mb-2">
                        (Submerged Under Water Reactor) for Large Volume Applications
                    </p>
                    <p className="text-gray-700 text-base mb-2">
                        Large-capacity chlorine dioxide generators are equipped with advanced safety features to minimize the risks associated with the release of toxic ClO<sub>2</sub> gas and potential explosions. These systems utilize a submerged in-line reactor configuration, where two chemical conveying lines transport reagents (32% HCl and 31% NaClO<sub>2</sub>) from metering skids to the reactor. For long-distance applications, the chemical lines are enclosed within a triple-layered dilution water pipe, ensuring leak containment. For shorter distances, the lines connect directly from dosing pumps to the reactor.
                    </p>
                    <p className="text-gray-700 text-base mb-2">
                        Safety is further enhanced by flexible triple-layer pipes, featuring a PVDF/PTFE core reinforced with high-tensile steel-wire braid and a protective outer layer. These pipes offer excellent chemical resistance, mechanical strength, and leak-free performance with minimal intermediate connections.
                    </p>
                    <p className="text-gray-700 text-base">
                        This configuration represents the safest approach for chlorine dioxide generation, as the chemicals and dilution water are transported separately and securely to the reactor, minimizing exposure. The generator is installed directly in the water basin, with chlorine dioxide production confined to this area. A fiberglass cover protects the generator, and a diffusion system distributes chlorine dioxide throughout the water, enhancing disinfection efficiency. This advanced design allows for unlimited chlorine dioxide production, offering a reliable and safe solution for water treatment.
                    </p>
                </div>
            </div>

            {/* Cost Saving Technology Section */}
            <div className="bg-blue-100 rounded-2xl shadow-lg px-10 py-8 mb-12 flex flex-col items-center gap-6">
                <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">
                    Cost Saving Technology for Multiple Dosing Points
                </h2>
                <img
                    src="/galleryp/clo2/cost-saving-multiple-dosing.png"
                    alt="Cost Saving Technology for Multiple Dosing Points"
                    className="w-full max-w-2xl rounded-xl shadow border border-blue-100 object-contain"
                />
            </div>

            {/* Containerised Systems Section */}
            <div className="bg-white mb-12 flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 w-full flex items-center justify-center">
                    <img
                        src="/galleryp/clo2/container.jpg"
                        alt="Containerised Chlorine Dioxide Generator System"
                        className="w-full h-auto object-contain rounded-xl border border-blue-100 shadow"
                    />
                </div>
                <div className="md:w-1/2 w-full flex flex-col gap-4">
                    <h2 className="text-3xl font-bold text-blue-800 mb-2">
                        Containerised Chlorine Dioxide Generator Systems
                    </h2>
                    <p className="text-gray-700 text-base mb-2">
                        For rapid deployment and ease of installation, our chlorine dioxide generators are available as fully containerised systems. Housed in robust, weatherproof containers, these turnkey solutions integrate all necessary equipment, controls, and safety features for on-site generation and dosing.
                    </p>
                    <p className="text-gray-700 text-base mb-2">
                        Containerised systems are ideal for remote locations, temporary projects, or sites with limited infrastructure. Each unit is pre-assembled, factory-tested, and ready for immediate operation, minimizing installation time and ensuring consistent performance.
                    </p>
                    <p className="text-gray-700 text-base">
                        With flexible sizing and custom configurations, our containerised solutions provide reliable, safe, and efficient chlorine dioxide generation for a wide range of water treatment applications.
                    </p>
                </div>
            </div>

            {/* Document Download Section */}
            <div className="space-y-12 mb-16">
                {[
                    {
                        category: "Brochure and Documents",
                        brochures: [
                            { name: "Genox® Smart Digital Chlorine Dioxide Generator", pdf: "genox-chlorine-dioxide-generator.pdf", thumbnail: "brochure2.webp" },
                            {
                                name: "Doc 2",
                                pdf: "containerised-chlorine-dioxide-generator-system.pdf",
                                thumbnail: "containerised-chlorine-dioxide-generator-system.jpg"
                            },
                            {
                                name: "Doc 3",
                                pdf: "cost-saving-technology-multiple-dosing-points.pdf",
                                thumbnail: "cost-saving-technology-multiple-dosing-points.jpg"
                            }
                        ]
                    }
                ].map((categoryBrochures) => (
                    <div key={categoryBrochures.category}>
                        <h2 className="text-3xl font-semibold text-blue-800 mb-4">{categoryBrochures.category}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {categoryBrochures.brochures.map((brochure) => (
                                <div
                                    key={brochure.pdf}
                                    className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center gap-3"
                                >
                                    <img
                                        className="h-64 w-fit rounded-xl"
                                        src={`/brochuresp/thumbnails/${brochure.thumbnail}`}
                                        alt={brochure.name}
                                    />
                                    <h3 className="text-center text-xl font-medium text-blue-900 mb-2">{brochure.name}</h3>
                                    <button
                                        onClick={() =>
                                            setSelectedBrochure({
                                                name: brochure.name,
                                                category: categoryBrochures.category,
                                                pdf: brochure.pdf
                                            })
                                        }
                                        className="text-blue-700 mt-auto font-semibold hover:underline"
                                    >
                                        Download Brochure PDF
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Content Sections */}
            {/* <div className="bg-white px-16 py-8 flex flex-col gap-12">
                {productJson.sections.map((section, index) => {
                    // Combine 3rd and 4th sections (index 2 and 3)
                    if (index === 2) {
                        const nextSection = productJson.sections[3];
                        if (nextSection) {
                            return (
                                <div key={section.title + "-combined"} className="flex flex-col gap-8">
                                    <div
                                        className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 1 ? "" : "md:flex-row-reverse"}`}
                                    >
                                        <div className='md:w-1/2 w-full flex flex-col gap-3 items-center justify-center'>
                                            <img
                                                src={productJson.gallery[2]?.src || "/galleryp/clo2/clo2_3.webp"}
                                                alt={productJson.gallery[2]?.alt || "Product Image"}
                                                className='w-full h-72 object-cover rounded-xl shadow border border-blue-100'
                                            />
                                            {productJson.gallery[index]?.alt && (
                                                <p className="text-sm text-gray-700 mt-2 text-center">
                                                    {productJson.gallery[index].alt}
                                                </p>
                                            )}
                                        </div>
                                        <div className='md:w-1/2 w-full flex flex-col gap-6'>
                                            <div>
                                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-blue-800">
                                                    {renderIcon(section.title)}
                                                    <span>{section.title}</span>
                                                </h2>
                                                <ul className="list-disc ml-6 text-gray-800">
                                                    {section.items.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-blue-800">
                                                    {renderIcon(nextSection.title)}
                                                    <span>{nextSection.title}</span>
                                                </h2>
                                                <ul className="list-disc ml-6 text-gray-800">
                                                    {nextSection.items.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    }
                    // Skip rendering the 4th section (index 3) since it's combined above
                    if (index === 3) return null;
                    // Render all other sections as usual
                    return (
                        <div
                            key={section.title}
                            className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 1 ? "" : "md:flex-row-reverse"}`}
                        >
                            <div className='md:w-1/2 w-full flex flex-col gap-3 items-center justify-center'>
                                <img
                                    src={productJson.gallery[index]?.src || "/galleryp/clo2/clo2_3.webp"}
                                    alt={productJson.gallery[index]?.alt || "Product Image"}
                                    className='w-full h-72 object-cover rounded-xl shadow border border-blue-100'
                                />
                                {productJson.gallery[index]?.alt && (
                                    <p className="text-sm text-gray-700 mt-2 text-center">
                                        {productJson.gallery[index].alt}
                                    </p>
                                )}
                            </div>
                            <div className='md:w-1/2 w-full'>
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-blue-800">
                                    {renderIcon(section.title)}
                                    <span>{section.title}</span>
                                </h2>
                                <ul className="list-disc ml-6 text-gray-800">
                                    {section.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div> */}

            {
                selectedBrochure && <DownloadBrochureForm isOpen={selectedBrochure !== null} onClose={() => setSelectedBrochure(null)} brochureInfo={selectedBrochure} />
            }


            {/* Related Blogs */}
            {productJson.relatedBlogs && productJson.relatedBlogs.length > 0 && (
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-blue-800 mb-6">Related Blogs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {productJson.relatedBlogs.map((blog, idx) => (
                            <a
                                key={blog.url}
                                href={blog.url}
                                className="flex flex-col bg-white rounded-xl shadow hover:shadow-lg transition-shadow border border-blue-100 hover:bg-blue-50"
                            >
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-48 object-cover rounded-t-xl"
                                />
                                <div className="p-5 flex flex-col flex-1">
                                    <span className="text-xs text-blue-600 mb-2">{blog.date}</span>
                                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{blog.title}</h3>
                                    <p className="text-gray-700 flex-1">{blog.summary}</p>
                                    <span className="mt-4 text-blue-700 font-medium hover:underline">Read more →</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            )}



            <div className="bg-primary rounded-2xl shadow-lg px-10 py-8 mb-12">
                <ClientsSection />
            </div>

        </div>
    );
}
