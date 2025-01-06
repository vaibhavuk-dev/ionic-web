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
            <NavBar shouldWhite={true} />

            <div className="w-full mx-auto px-32 py-12 bg-primaryLight">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Our Products
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl">
                            Discover the Success Stories and Satisfaction of Clients Who Have
                            Benefited from Our Expertise and Personalized Financial Guidance
                        </p>
                    </div>

                    <div className="w-full md:w-auto md:min-w-[320px]">
                        <form onSubmit={handleSearch} className="relative">
                            <input
                                type="text"
                                placeholder="Search...."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-3 pr-12 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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

            <div className="flex flex-col w-full py-16 gap-16 mx-auto bg-white px-32 rounded shadow-md relative">

                <ProductsGrid />
                <ContactForm />

            </div>


            <Footer />

        </div>
    );
}