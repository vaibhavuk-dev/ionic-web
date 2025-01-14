import React from 'react';
import {
    Droplets,
    Settings,
    Package,
    Factory,
    Wifi,
    ChevronRight,
    ArrowRight
} from 'lucide-react';
import ContactForm from '@/components/homepage/ContactForm';

const ServicesPage = () => {
    const services = [
        {
            id: 1,
            title: "Water Audit & Consultancy",
            tagline: "Smart Solutions for Sustainable Water Management",
            description: "Efficient water management begins with an in-depth analysis and expert advice. Our Water Audit & Consultancy services identify inefficiencies, optimize usage, and ensure regulatory compliance while promoting sustainability.",
            icon: Droplets,
            features: [
                "Water Usage Analysis",
                "Leak Detection",
                "Water Quality Testing",
                "Efficiency Optimization",
                "Detailed Reporting"
            ]
        },
        {
            id: 2,
            title: "System Modification & Upgradation",
            tagline: "Evolving Systems for Evolving Needs",
            description: "Enhance the performance and capacity of your water and wastewater systems with our modification and upgradation services. We deliver modernized, reliable, and efficient solutions tailored to your operational demands.",
            icon: Settings,
            features: [
                "Performance Assessment",
                "Process Optimization",
                "Equipment Upgradation",
                "Automation Integration",
                "Capacity Enhancement"
            ]
        },
        {
            id: 4,
            title: "Consumables & Spares",
            tagline: "Quality Components for Reliable Operations",
            description: "Ensure smooth operations with our range of genuine consumables and spare parts. From filtration media to equipment spares, we deliver high-performance components tailored to your system's needs.",
            icon: Package,
            features: [
                "Filtration Media",
                "Membranes",
                "Chemical Supplies",
                "Spare Parts",
                "Technical Support"
            ]
        },
        {
            id: 3,
            title: "Maintenance Service",
            tagline: "Seamless Maintenance for Uninterrupted Operations",
            description: "Our maintenance services ensure the longevity and peak performance of your water and wastewater systems. From preventive checks to emergency repairs, we safeguard your operations with reliability and efficiency.",
            icon: Settings,
            features: [
                "Preventive Maintenance",
                "Equipment Repairs",
                "System Diagnostics",
                "Emergency Support",
                "Training & Support"
            ]
        },
        {
            id: 5,
            title: "Turnkey Projects",
            tagline: "Complete Solutions, From Concept to Commissioning",
            description: "We provide end-to-end solutions for water and wastewater treatment, including design, installation, and commissioning. Our turnkey projects are customized to meet your specific requirements with a focus on efficiency and sustainability.",
            icon: Factory,
            features: [
                "Feasibility Studies",
                "Custom Design",
                "Construction & Installation",
                "Testing & Commissioning",
                "After-Sales Support"
            ]
        },
        {
            id: 6,
            title: "Remote Monitoring System",
            tagline: "Monitor, Manage, Optimize—Anytime, Anywhere",
            description: "Leverage cutting-edge technology with our Remote Monitoring System. Gain real-time insights, instant alerts, and centralized control to ensure your water treatment operations run efficiently, no matter where you are.",
            icon: Wifi,
            features: [
                "Real-Time Data Access",
                "Smart Alerts",
                "Cloud-Based Platform",
                "Energy Monitoring",
                "Multi-Plant Integration"
            ]
        }
    ];

    return (
        <>
        <div
        className="flex items-center"
        style={{
            backgroundImage: "url('/banner/bridge-banner.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
        <div className="flex flex-col justify-center bg-secondary w-full h-full bg-opacity-90 text-center responsive-padding py-4 lg:py-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">Our Services</h1>
            <h2 className="text-md lg:text-xl font-light text-white drop-shadow-lg mt-2">
            Comprehensive water treatment solutions tailored to your needs
            </h2>
        </div>
    </div>
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Hero Section */}
            {/* <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-blueb-950 mb-4">Our Services</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Comprehensive water treatment solutions tailored to your needs
                </p>
            </div> */}

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => {
                    const Icon = service.icon;
                    return (
                        <div
                            key={service.id}
                            className="relative cursor-pointer group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-blueb-950"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blueb-500 to-blueb-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                            <div className="p-8">
                                {/* Icon */}
                                <div className="h-14 w-14 bg-blue-50 rounded-lg p-3 mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                    <Icon className="h-full w-full text-blue-600 group-hover:text-white transition-colors duration-300" />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-semibold text-blueb-950 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-blue-600 font-medium mb-4 italic">
                                    "{service.tagline}"
                                </p>
                                <p className="text-gray-600 mb-6">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-gray-600">
                                            <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                {/* <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">
                                    Learn More
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </button> */}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Contact CTA */}
            <div className="mt-16 text-center">
                <div className="bg-blue-50 rounded-xl p-8">
                    <h2 className="text-2xl font-semibold text-blueb-950 mb-4">
                        Need Help Choosing the Right Service?
                    </h2>
                    <p className="text-gray-600 mb-6 text-center">
                        Our experts are here to understand your requirements and recommend the best solutions.
                    </p>
                    <a href="#contact-form" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                        Contact Us Today
                    </a>
                </div>
            </div>

            <div className="flex flex-col w-full py-16 gap-16 mx-auto rounded relative">
                <ContactForm />
            </div>
        </div>
        </>
    );
};

export default ServicesPage;