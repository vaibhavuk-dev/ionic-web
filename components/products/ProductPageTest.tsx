"use client"
import React, { useState } from 'react';
import {
    Check,
    Factory,
    Activity,
    Award,
    Zap,
    CheckCircle2,
    Settings
} from 'lucide-react';
import BlockRenderer from '../BlockRenderer';
import DownloadBrochureForm from '../brochures/DownloadBrochureForm';
import { productJson } from './data';

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
            <div className="rounded-2xl mb-10 flex flex-col md:flex-row gap-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-xl p-8">
                <div className='md:w-2/5 w-full flex items-center justify-center'>
                    <div className="w-full">
                        <img
                            src={"/galleryp/clo2/clo2_3.webp"}
                            alt="Product Image"
                            className='w-full h-80 object-cover rounded-2xl shadow-lg border border-blue-100 mb-4'
                        />
                        <div className="aspect-w-16 aspect-h-9">
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
                        </div>
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
                    <div className="flex flex-wrap gap-4">
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
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="bg-white rounded-2xl shadow-lg px-16 py-8 flex flex-col gap-12">
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
            </div>

            {
                selectedBrochure && <DownloadBrochureForm isOpen={selectedBrochure !== null} onClose={() => setSelectedBrochure(null)} brochureInfo={selectedBrochure} />
            }


            {/* Related Blogs */}
            {productJson.relatedBlogs && productJson.relatedBlogs.length > 0 && (
                <div className="mt-16">
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
        </div>
    );
}
