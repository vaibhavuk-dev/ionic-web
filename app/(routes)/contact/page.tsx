"use client"
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import NewsLetter from "@/components/homepage/NewsLetter";
import { Metadata } from "next";
import { useState } from "react";

export default function ContactPage() {

    const [contactType, setContactType] = useState("Write");

    return (
        <div>
            <NavBar shouldWhite={true} />

            <div
                className="bg-blueb-700 py-6 flex items-center gap-3 h-[200px]"
                style={{
                    backgroundImage: "url('/banner/bridge-banner.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex flex-col gap-3 px-32 bg-blueb-700 py-6 rounded-e-3xl bg-opacity-90">
                    <h1 className="text-4xl font-bold text-white drop-shadow-lg">Contact Us</h1>
                    <p className="text-xl font-light text-white drop-shadow-lg">
                        Have Questions? We Have Answers. Get in Touch!
                    </p>
                </div>
            </div>

            <div className="flex w-full px-32 py-10 justify-evenly">
                <div className="flex flex-col gap-1 justify-center items-center">
                    <img className="h-10 w-10" src="/icons/call.svg" alt="" />
                    <p className="font-semibold">Technical Query</p>
                    <p className="">technical@ionic.co.in</p>
                    <p className="">+020 1234 5678</p>
                </div>
                <div className="flex flex-col gap-1 justify-center items-center">
                    <img className="h-10 w-10" src="/icons/call.svg" alt="" />
                    <p className="font-semibold">Sales Enquiry</p>
                    <p className="">technical@ionic.co.in</p>
                    <p className="">+020 1234 5678</p>
                </div>
                <div className="flex flex-col gap-1 justify-center items-center">
                    <img className="h-10 w-10" src="/icons/call.svg" alt="" />
                    <p className="font-semibold">General Enquiry</p>
                    <p className="">technical@ionic.co.in</p>
                    <p className="">+020 1234 5678</p>
                </div>
            </div>

            <div className="mt-12 px-32">
                <div className="flex gap-10">
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
                    <div className="w-full">
                        <img src="/ioniclogo.png" alt="" className="object-contain w-full p-16 rounded-lg" />
                        <p className="w-full text-center mt-2 text-sm">Image showing location of metro station and office</p>
                    </div>
                </div>
            </div>

            <div className="flex w-full gap-10 mx-auto bg-white px-32 py-16 rounded shadow-md relative">

                <form className="w-[40%]">
                    <p className="text-2xl font-semibold text-blueb-700">Have any query?</p>
                    <div className="flex w-full pt-5">
                        <p className={`ml-3 text-center px-2 py-4 text-lg cursor-pointer ${contactType == "Write" ? "font-semibold border-b-2 border-blueb-700 text-blueb-700" : "text-gray-500"}`} onClick={() => setContactType("Write")}>Write Us</p>
                        <p className={`ml-3 text-center px-2 py-4 text-lg cursor-pointer ${contactType == "Appointment" ? "font-semibold border-b-2 border-blueb-700 text-blueb-700" : "text-gray-500"}`} onClick={() => setContactType("Appointment")}>Schedule Appointment</p>
                    </div>
                    <div className="mt-6 mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">Phone</label>
                        <input type="phone" id="phone" name="phone" placeholder="Your Phone" className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">Industry</label>
                        <input type="email" id="email" name="email" placeholder="Your Industry" className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">Organization</label>
                        <input type="email" id="email" name="email" placeholder="Your Organization" className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500" />
                    </div>
                    {
                        contactType == "Appointment" && <>
                            <div className="mb-4">
                                <label htmlFor="appointment-date" className="block text-sm font-semibold mb-2">Preferred Date</label>
                                <input type="date" id="appointment-date" name="appointment-date" className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="appointment-time" className="block text-sm font-semibold mb-2">Preferred Time</label>
                                <input type="time" id="appointment-time" name="appointment-time" className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500" />
                            </div>
                        </>
                    }
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-semibold mb-2">Query</label>
                        <textarea id="message" name="message" rows={5} placeholder="Your Query" className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-blueb-700 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">{contactType == "Appointment" ? "Schedule Appointment" : "Send Message"}</button>
                    </div>
                </form>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15122.922505541159!2d73.79250328511964!3d18.63118198564944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b84e62f8c169%3A0xf6df110a3e44ab98!2sIonic%20Engineering%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1716738071408!5m2!1sen!2sin" className="w-[60%] min-h-[100%]" loading="lazy" ></iframe>
            </div>

            <NewsLetter />
            <Footer />
        </div>
    )
}