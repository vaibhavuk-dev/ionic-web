"use client"
import NavBar from "@/components/NavBar";
import ProductsGrid from "@/components/products/ProductsGrid";
import { useState } from "react";
import { Search } from 'lucide-react';
import ContactForm from "@/components/homepage/ContactForm";
import Footer from "@/components/Footer";

export default function ProductsPage() {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: any) => {
        e.preventDefault();
        // Implement search functionality
        console.log('Searching for:', searchQuery);
    };

    return (
        <div>
            

            <div
                className="w-full"
                style={{
                    backgroundImage: "url('/banner/bridge-banner.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="px-32 py-12 flex items-center justify-between bg-secondary w-full h-full bg-opacity-90 text-center">

                    <div className="flex flex-col items-start justify-start">
                        <h1 className="text-4xl font-bold text-white drop-shadow-lg">                            
                            Our Products
                        </h1>
                        <p className="mt-4 text-xl font-light text-white drop-shadow-lg text-start pr-20">
                        Advanced Water Treatment Technologies for Industrial Excellence
                        </p>
                    </div>

                    <div className="w-full md:w-auto md:min-w-[320px]">
                        <form onSubmit={handleSearch} className="relative">
                            <input
                                type="text"
                                placeholder="Search...."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                            >
                                <Search className="w-6 h-6" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            <ProductsGrid />
            <div className="flex flex-col w-full py-16 gap-16 mx-auto bg-white px-32 rounded shadow-md relative">

                <hr></hr>
                <ContactForm />

            </div>


            

        </div>
    );
}