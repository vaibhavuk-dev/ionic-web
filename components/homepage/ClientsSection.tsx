import React from 'react';

export default function ClientsSection() {
    const clients = [
        "/homepage/clients/client1.jpg",
        "/homepage/clients/client2.png",
        "/homepage/clients/client3.jpg",
        "/homepage/clients/client4.png",
        "/homepage/clients/client5.png",
        "/homepage/clients/client6.png",
        "/homepage/clients/client7.jpg",
        "/homepage/clients/client8.png",
        "/homepage/clients/client9.png",
        "/homepage/clients/client10.png",
        "/homepage/clients/client11.png",
        "/homepage/clients/client12.jpg",
        "/homepage/clients/client13.png",
        "/homepage/clients/client14.png",
        "/homepage/clients/client15.png",
        "/homepage/clients/client16.jpg",
        "/homepage/clients/client17.png",
        "/homepage/clients/client18.png",
        "/homepage/clients/client19.png",
        "/homepage/clients/client20.png",
        "/homepage/clients/client21.jpg",
        "/homepage/clients/client22.jpg",
        "/homepage/clients/client23.png",
        "/homepage/clients/client24.png",
        "/homepage/clients/client25.png",
        "/homepage/clients/client26.png",
        "/homepage/clients/client27.png",
        "/homepage/clients/client28.png",
        "/homepage/clients/client29.jpg",
        "/homepage/clients/client30.png",
        "/homepage/clients/client31.png",
        "/homepage/clients/client32.jpg",
    ];

    return (
        <div className="w-full relative">
            <div className="container mx-auto ">
                <div className="relative flex mb-4 gap-5 items-center">
                    <span className="absolute inset-y-0 left-0 w-fit h-full bg-primaryLight -z-10 rounded-md"></span>
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
                    {/* Wrapper for scrolling content */}
                    <div className="flex space-x-12 animate-scroll">
                        {Array(2) // Duplicate the clients array for seamless scrolling
                            .fill(clients)
                            .flat()
                            .map((client, index) => (
                                <div
                                    key={`scroll-${index}`}
                                    className="flex-shrink-0 h-24 w-48 bg-white rounded-lg flex items-center justify-center p-4"
                                >
                                    <img
                                        src={client}
                                        alt={`Client logo ${index + 1}`}
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