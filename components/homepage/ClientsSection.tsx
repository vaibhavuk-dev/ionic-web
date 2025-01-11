import React from 'react';

export default function ClientsSection() {
    const clients = [
        {
            name: "Neropure",
            logo: "/homepage/logoplaceholder.jpg"
        },
        {
            name: "Aquapharm",
            logo: "/homepage/logoplaceholder.jpg"
        },
        {
            name: "Runwal",
            logo: "/homepage/logoplaceholder.jpg"
        },
        {
            name: "ACG",
            logo: "/homepage/logoplaceholder.jpg"
        },
        {
            name: "Aurangabad Electricals",
            logo: "/homepage/logoplaceholder.jpg"
        },
        {
            name: "Automobile Corporation of Goa",
            logo: "/homepage/logoplaceholder.jpg"
        },
        {
            name: "Neropure",
            logo: "/homepage/logoplaceholder.jpg"
        },
        {
            name: "Aquapharm",
            logo: "/homepage/logoplaceholder.jpg"
        },
        {
            name: "Runwal",
            logo: "/homepage/logoplaceholder.jpg"
        },
        {
            name: "ACG",
            logo: "/homepage/logoplaceholder.jpg"
        },
        {
            name: "Aurangabad Electricals",
            logo: "/homepage/logoplaceholder.jpg"
        },
        {
            name: "Automobile Corporation of Goa",
            logo: "/homepage/logoplaceholder.jpg"
        }
    ];

    return (
        <div className="w-full relative">
            <div className="container mx-auto ">
                <div className="relative flex mb-4 gap-5 items-center">
                    <span className="absolute inset-y-0 left-0 w-full h-full bg-primaryLight -z-10 rounded-md"></span>
                    <p className="inline-block text-primary font-semibold uppercase px-2 bg-primaryLight rounded-md">
                        Clients
                    </p>
                    <div className="border-t-2 border-primaryLight mt-1 w-16"></div>
                </div>
                <h2 className="text-white text-3xl md:text-4xl font-bold">Our Clients</h2>
                <p className="text-primaryLight mt-2">
                    Discover the Success Stories and Satisfaction of Clients Who Have Benefited from Our Expertise and Personalized Financial Guidance
                </p>
                <div className="relative mt-8 overflow-hidden">
                    {/* First row of logos */}
                    <div className="flex space-x-12 animate-scroll">
                        {clients.map((client, index) => (
                            <div
                                key={`scroll-1-${index}`}
                                className="flex-shrink-0 h-24 w-48 bg-gray-200 rounded-lg flex items-center justify-center p-4"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                        ))}
                        {/* Duplicate logos for seamless scrolling */}
                        {clients.map((client, index) => (
                            <div
                                key={`scroll-2-${index}`}
                                className="flex-shrink-0 h-24 w-48 bg-gray-200 rounded-lg flex items-center justify-center p-4"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}