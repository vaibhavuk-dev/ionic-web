"use client"
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ContactForm from "@/components/homepage/ContactForm";
import NewsLetter from "@/components/homepage/NewsLetter";
import { Metadata } from "next";
import { useState } from "react";

export default function ContactPage() {

    const [contactType, setContactType] = useState("Write");

    return (
        <div>

            <div
                className="flex items-center"
                style={{
                    backgroundImage: "url('/banner/bridge-banner.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex flex-col justify-center bg-secondary w-full h-full bg-opacity-90 text-center responsive-padding py-4 lg:py-8">
                    <h1 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">Contact Us</h1>
                    <h2 className="text-md lg:text-xl font-light text-white drop-shadow-lg mt-2">
                        Have Questions? We Have Answers. Get in Touch!
                    </h2>
                </div>
            </div>
            <div className="mt-12 mx-auto responsive-padding">
            <p className="text-2xl lg:text-4xl font-bold text-blueb-700">How to Reach Us</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-auto responsive-padding mt-12 mb-4">
                <div className="bg-white rounded shadow-md p-5">
                    <img src="/transports/metro.webp" className="w-full h-48 object-cover" alt="By Metro" />
                    <p className="text-2xl font-bold text-blueb-700 mt-2">By Metro</p>
                    <p className="text-md mt-3">
                        The nearest metro station is PCMC Metro Station, located just 500 meters away.
                        <br /><br />
                        1. From PCMC Metro Station, take the exit towards the service road.
                        <br />
                        2. Turn left and walk for 300 meters.
                        <br />  
                        3. Turn right and walk for 150 meters.
                        <br />
                        4. Our office is located on the left side of the road.
                    </p>
                </div>
                <div className="bg-white rounded shadow-md p-5">
                    <img src="/transports/railway.avif" className="w-full h-48 object-cover" alt="By Train" />
                    <p className="text-2xl font-bold text-blueb-700 mt-2">By Train</p>
                    <p className="text-md mt-3">
                        If you are traveling by train, the Pune Railway Station is the closest major station.
                        <br /><br />
                        1. From Pune Railway Station, hire a cab and drive to the PCMC Metro Station.
                        <br />
                        2. From PCMC Metro Station, take the exit towards the service road.
                        <br />
                        3. Turn left and walk for 300 meters.
                        <br />
                        4. Turn right and walk for 150 meters.
                        <br />
                        5. Our office is located on the left side of the road.
                    </p>
                </div>
                <div className="bg-white rounded shadow-md p-5">
                    <img src="/transports/airport.jpeg" className="w-full h-48 object-cover" alt="By Air" />
                    <p className="text-2xl font-bold text-blueb-700 mt-2">By Air</p>
                    <p className="text-md mt-3">
                        The nearest airport is Pune International Airport, located 20 kilometers from our office.
                        <br /><br />
                        1. From Pune International Airport, hire a cab and drive to the PCMC Metro Station.
                        <br />
                        2. From PCMC Metro Station, take the exit towards the service road.
                        <br />
                        3. Turn left and walk for 300 meters.
                        <br />
                        4. Turn right and walk for 150 meters.
                        <br />
                        5. Our office is located on the left side of the road.
                    </p>
                </div>
            </div>

           <div className="flex flex-col w-full py-16 gap-16 mx-auto bg-white responsive-padding rounded shadow-md relative">
                           <ContactForm />
                       </div>

            {/* <NewsLetter /> */}

        </div>
    )
}