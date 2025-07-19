"use client"
import Image from 'next/image';
import { ArrowRight, Download } from 'lucide-react';
import DownloadBrochureForm from '@/components/brochures/DownloadBrochureForm';
import { useState } from 'react';

export function HeroSection() {

  const [selectedBrochure, setSelectedBrochure] = useState<{ name: string, category: string, pdf: string } | null>(null);

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-4 py-16 md:py-20">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900">
            The Future of Water Purity is Here
          </h1>
          <h2 className="mt-4 text-xl md:text-2xl font-semibold text-blue-800">
            The Quick Cycle Auto D.M. Plant
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Drastically cut operating costs, eliminate manual processes, and ensure consistent high-purity water. Save over{' '}
            {/* <strong className="text-green-600">₹2,80,600 annually</strong>. */}
          </p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <a href='#contact-form' className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <button className="inline-flex items-center justify-center rounded-md border border-blue-600 bg-transparent px-6 py-3 text-base font-medium text-blue-700 shadow-sm transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Download Brochure
              <Download className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex justify-center">
          <Image
            src="/products/qcdm/auto-dm-plant.jpg" // Use the best image of your auto plant here [cite: 1]
            alt="IONIC Quick Cycle Auto D.M. Plant"
            width={500}
            height={500}
            className="rounded-lg shadow-2xl object-cover"
            priority
          />
        </div>
      </div>

      {
        selectedBrochure && <DownloadBrochureForm isOpen={selectedBrochure !== null} onClose={() => setSelectedBrochure(null)} brochureInfo={selectedBrochure} />
      }
    </section>
  );
}