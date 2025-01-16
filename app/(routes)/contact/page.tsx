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

            <div className="mt-12 responsive-padding">
                <div className="container lg:flex gap-10">
                    <div className="w-full">
                        <p className="text-2xl font-semibold text-blueb-700">How to Reach Us</p>
                        <p className="text-md w-fit  mt-3 text-justify">
                            <span className="font-semibold">By Metro:</span><br />
                            The nearest metro station is PCMC Metro Station, located just 500 meters away.
                            <br /><br />
                            <span className="font-semibold">By Train:</span><br />
                            If you are traveling by train, the Pune Railway Station is the closest major station, providing convenient access to our location.
                            <br /><br />
                            <span className="font-semibold">By Air:</span><br />
                            For those flying in, Pune International Airport is the nearest airport, making it easy to reach us by taxi or rideshare.
                        </p>
                    </div>
                    {/* <div className="w-full">
                        <img src="/logo/ionic_logo.gif" alt="" className="object-contain w-full p-16 rounded-lg" />
                        <p className="w-full text-center mt-2 text-sm">Image showing location of metro station and office</p>
                    </div> */}
                </div>
            </div>

           <div className="flex flex-col w-full py-16 gap-16 mx-auto bg-white responsive-padding rounded shadow-md relative">
                           <ContactForm />
                       </div>

            {/* <NewsLetter /> */}

        </div>
    )
}