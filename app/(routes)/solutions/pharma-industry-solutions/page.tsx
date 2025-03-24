// pages/solutions/pharma-industry.js
import React from "react";
import Head from "next/head";
import Image from "next/image";
import ContactForm from "@/components/homepage/ContactForm";

export default function PharmaIndustry() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Pharmaceutical Industry Solutions | Ionic</title>
        <meta
          name="description"
          content="Advanced UV oxidation solutions for pharmaceutical wastewater treatment - eliminating APIs, antibiotics, hormones, and other contaminants effectively."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-primaryLight py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-headlineColor mb-6">
                Pharmaceutical Wastewater Treatment Solutions
              </h1>
              <p className="text-lg text-textcolor mb-8">
                Our advanced UV oxidation technology effectively eliminates
                Active Pharmaceutical Ingredients (APIs) and other contaminants
                from wastewater, ensuring environmental compliance and
                sustainability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition">
                  Request Consultation
                </button>
                {/* <button className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primaryLight transition">
                  Download Brochure
                </button> */}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/api/placeholder/600/400"
                  alt="Pharmaceutical wastewater treatment system"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-headlineColor mb-4">
              The Challenge
            </h2>
            <p className="text-lg text-textcolor">
              Pharmaceuticals, antibiotics, hormones, and agrochemicals are
              increasingly detected in wastewater, finding their way into soil
              and drinking water.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-primaryLight p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-headlineColor mb-2">
                Environmental Persistence
              </h3>
              <p className="text-textcolor">
                Micropollutants from pharmaceutical manufacturing persist in the
                environment, bioaccumulate, and cause toxicity to aquatic life
                and ecosystems.
              </p>
            </div>

            <div className="bg-secondaryLight p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-headlineColor mb-2">
                Health Impacts
              </h3>
              <p className="text-textcolor">
                Endocrine disrupting substances, antibiotics, and other
                pharmaceuticals in water can lead to serious health effects and
                antimicrobial resistance.
              </p>
            </div>

            <div className="bg-primaryLight p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-headlineColor mb-2">
                Regulatory Pressure
              </h3>
              <p className="text-textcolor">
                Growing regulatory requirements in Europe, North America, and
                globally are mandating pharmaceutical manufacturers to reduce
                their environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-primaryLight">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-headlineColor mb-4">
              Our Solution: PHOTOX Advanced UV Oxidation
            </h2>
            <p className="text-lg text-textcolor">
              Ionic's PHOTOX technology uses advanced UV oxidation processes to
              effectively eliminate pharmaceutical contaminants from wastewater.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/api/placeholder/600/400"
                alt="PHOTOX UV Reactor"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-headlineColor mb-4">
                How It Works
              </h3>
              <p className="text-textcolor mb-6">
                Our UV reactors use a combination of UV light and oxidizing
                agents (hydrogen peroxide/ozone) to generate highly reactive
                hydroxyl radicals that effectively degrade even the most
                persistent organic pollutants.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-3 mt-1">
                    <svg
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-textcolor">
                    <span className="font-semibold">Complete Degradation:</span>{" "}
                    Breaks down APIs, antibiotics, hormones, and other complex
                    compounds into harmless byproducts.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-3 mt-1">
                    <svg
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-textcolor">
                    <span className="font-semibold">Customizable:</span>{" "}
                    Tailored solutions for specific treatment requirements and
                    wastewater characteristics.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-3 mt-1">
                    <svg
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-textcolor">
                    <span className="font-semibold">
                      Environmentally Friendly:
                    </span>{" "}
                    Reduces the need for chemical additives and minimizes
                    harmful byproducts.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-3 mt-1">
                    <svg
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-textcolor">
                    <span className="font-semibold">Cost-Effective:</span> Lower
                    operational costs compared to traditional treatment methods
                    like incineration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-headlineColor mb-4">
              Key Applications
            </h2>
            <p className="text-lg text-textcolor">
              Our UV oxidation systems effectively treat various pharmaceutical
              compounds in different wastewater streams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <div className="w-16 h-16 rounded-full bg-primaryLight flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-headlineColor mb-2">
                Antibiotics
              </h3>
              <p className="text-textcolor mb-4">
                Effectively eliminates antibiotics like Sulfamide, Penicillin,
                and Amoxicillin to prevent the formation of multi-resistant
                germs.
              </p>
              <a href="#" className="text-primary font-medium hover:underline">
                Learn more →
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <div className="w-16 h-16 rounded-full bg-secondaryLight flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-headlineColor mb-2">
                Hormones
              </h3>
              <p className="text-textcolor mb-4">
                Removes hormones such as Cyproterone acetate, Letrozole,
                Ethinylestradiol from CIP rinse wastewater without any
                contaminated side-streams.
              </p>
              <a href="#" className="text-primary font-medium hover:underline">
                Learn more →
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <div className="w-16 h-16 rounded-full bg-primaryLight flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-headlineColor mb-2">
                Cytostatics
              </h3>
              <p className="text-textcolor mb-4">
                Completely mineralizes highly potent cytostatic substances like
                Capecitabin and Vinorelbin with lower OPEX compared to
                incineration.
              </p>
              <a href="#" className="text-primary font-medium hover:underline">
                Learn more →
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <div className="w-16 h-16 rounded-full bg-secondaryLight flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-headlineColor mb-2">
                Multi-API Sites
              </h3>
              <p className="text-textcolor mb-4">
                Handles complex wastewaters from sites manufacturing and
                formulating multiple APIs, effectively treating high
                fluctuations in concentration.
              </p>
              <a href="#" className="text-primary font-medium hover:underline">
                Learn more →
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <div className="w-16 h-16 rounded-full bg-primaryLight flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-headlineColor mb-2">
                API Synthesis
              </h3>
              <p className="text-textcolor mb-4">
                Treats wastewater from the synthesis of APIs and intermediates
                that are typically difficult to manage with traditional methods.
              </p>
              <a href="#" className="text-primary font-medium hover:underline">
                Learn more →
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <div className="w-16 h-16 rounded-full bg-secondaryLight flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-headlineColor mb-2">
                CIP Rinse Water
              </h3>
              <p className="text-textcolor mb-4">
                Effectively treats Clean-in-Place rinse wastewater containing
                trace amounts of APIs and drug residues from pharmaceutical
                manufacturing.
              </p>
              <a href="#" className="text-primary font-medium hover:underline">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-primaryLight">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-headlineColor mb-4">
              Our Implementation Process
            </h2>
            <p className="text-lg text-textcolor">
              From lab testing to full-scale implementation, we provide a
              comprehensive approach to solving your pharmaceutical wastewater
              challenges.
            </p>
          </div>

          <div className="relative">
            {/* Process timeline */}
            <div className="hidden md:block h-1 bg-primary absolute top-24 left-0 right-0 z-0"></div>

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-headlineColor mb-2">
                  Lab Feasibility Study
                </h3>
                <p className="text-textcolor">
                  We assess your wastewater's treability and determine optimal
                  process parameters through comprehensive lab testing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-headlineColor mb-2">
                  Pilot Testing
                </h3>
                <p className="text-textcolor">
                  We validate lab findings on a larger scale and assess
                  performance under real-world conditions with on-site pilot
                  plants.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-headlineColor mb-2">
                  System Design
                </h3>
                <p className="text-textcolor">
                  Based on pilot results, we design a customized full-scale
                  system tailored to your specific treatment needs and facility
                  requirements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-headlineColor mb-2">
                  Implementation
                </h3>
                <p className="text-textcolor">
                  We handle installation, commissioning, validation, and provide
                  comprehensive training and ongoing support for your new
                  system.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition">
              Start Your Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-headlineColor mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-textcolor">
              Our UV oxidation technology has been successfully implemented in
              pharmaceutical facilities worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="/api/placeholder/400/200"
                alt="BASF GmbH Case Study"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-headlineColor mb-2">
                  BASF GmbH
                </h3>
                <p className="text-sm text-gray-500 mb-3">Germany</p>
                <p className="text-textcolor mb-4">
                  Successfully implemented UV oxidation for EDTA removal from
                  pharmaceutical production wastewater.
                </p>
                <a
                  href="#"
                  className="text-primary font-medium hover:underline"
                >
                  Read case study →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="/api/placeholder/400/200"
                alt="GSK Case Study"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-headlineColor mb-2">
                  GSK
                </h3>
                <p className="text-sm text-gray-500 mb-3">Singapore</p>
                <p className="text-textcolor mb-4">
                  Installed UV oxidation system at an Amoxicillin manufacturing
                  site to treat antibiotic-contaminated wastewater.
                </p>
                <a
                  href="#"
                  className="text-primary font-medium hover:underline"
                >
                  Read case study →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="/api/placeholder/400/200"
                alt="Merck KGaA Case Study"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-headlineColor mb-2">
                  Merck KGaA
                </h3>
                <p className="text-sm text-gray-500 mb-3">Switzerland</p>
                <p className="text-textcolor mb-4">
                  Applied UV oxidation technology at a pharmaceutical
                  manufacturing site producing antihypertensives containing
                  phenolic structures.
                </p>
                <a
                  href="#"
                  className="text-primary font-medium hover:underline"
                >
                  Read case study →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondaryLight">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-headlineColor mb-4">
              Benefits of Our Solution
            </h2>
            <p className="text-lg text-textcolor">
              Our UV oxidation technology offers numerous advantages for
              pharmaceutical wastewater treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary flex items-center justify-center mr-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-headlineColor mb-2">
                    Effective Degradation
                  </h3>
                  <p className="text-textcolor">
                    Destroys complex organic pollutants into non-toxic
                    substances.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary flex items-center justify-center mr-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-headlineColor mb-2">
                    No Chemical Residues
                  </h3>
                  <p className="text-textcolor">
                    No secondary waste, unlike traditional chemical treatments.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary flex items-center justify-center mr-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-headlineColor mb-2">
                    Eco-Friendly
                  </h3>
                  <p className="text-textcolor">
                    Minimizes CO₂ emissions and meets global environmental
                    standards.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary flex items-center justify-center mr-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-headlineColor mb-2">
                    Versatile Applications
                  </h3>
                  <p className="text-textcolor">
                    Works for pharmaceutical, chemical, and industrial
                    wastewater.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary flex items-center justify-center mr-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-headlineColor mb-2">
                    High Efficiency
                  </h3>
                  <p className="text-textcolor">
                    Handles highly concentrated wastewater resistant to
                    conventional treatments.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary flex items-center justify-center mr-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-headlineColor mb-2">
                    Scalable & Reliable
                  </h3>
                  <p className="text-textcolor">
                    Customizable for different capacities, ensuring long-term
                    sustainable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary-light text-text-color py-12 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Why Choose Ionic?
          </h2>
          <p className="text-lg mb-6">
            We combine{" "}
            <span className="font-semibold">
              cutting-edge technology, proven expertise,
            </span>
            and <span className="font-semibold">customized solutions</span> to
            help pharmaceutical manufacturers achieve
            <span className="text-secondary font-semibold">
              {" "}
              compliance, sustainability, and cost savings.
            </span>
          </p>

          <p className="text-xl font-semibold text-secondary mt-4">
            🚀 Let’s build a cleaner, greener future together! 🚀
          </p>
        </div>
      </section>
      <div className="py-6 flex flex-col items-center justify-center">
        <ContactForm shouldShowHeader={false} />
      </div>
    </div>
  );
}

// ✅ No Chemical Residues: No secondary waste, unlike traditional chemical treatments.
// ✅ Eco-Friendly: Minimizes CO₂ emissions and meets global environmental standards.
// ✅ Versatile Applications: Works for pharmaceutical, chemical, and industrial wastewater.
// ✅ High Efficiency: Handles highly concentrated wastewater resistant to conventional treatments.
// ✅ Scalable & Reliable: Customizable for different capacities, ensuring long-term sustainable
