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

            <div className='w-full h-full gap-12 responsive-padding'>
                <div className="flex flex-col lg:flex-row my-12 w-full gap-12 justify-between">
                    {/* Email */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-primaryLight flex items-center justify-center">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="ml-4 text-xl font-semibold text-textcolorDark">Email</h2>
                        </div>
                        <p className="text-textcolor mb-2">Our friendly team is here to help.</p>
                        <a href="mailto:contact@ionic.co.in" className="text-primary hover:underline">contact@ionic.co.in</a><br />
                        <a href="mailto:support@ionic.co.in" className="text-primary hover:underline">support@ionic.co.in</a>
                    </div>

                    {/* Phone */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-primaryLight flex items-center justify-center">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h2 className="ml-4 text-xl font-semibold text-textcolorDark">Phone</h2>
                        </div>
                        <p className="text-textcolor mb-2">Mon-Fri from 8am to 5pm.</p>
                        <a href="tel:020-27475272" className="text-primary hover:underline">020-27475272</a><br />
                        <a href="tel:8275486263" className="text-primary hover:underline">8275486263</a>
                    </div>

                    {/* Office */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-primaryLight flex items-center justify-center">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h2 className="ml-4 text-xl font-semibold text-textcolorDark">Office</h2>
                        </div>
                        <p className="text-textcolor mb-2">Come say hello at our office HQ.</p>
                        <p className="text-textcolor">
                            No 1, 5 & 12, Ground Floor, B Wing, Mahalaxmi Heights,<br />
                            Old Mumbai - Pune Hwy, next to Keys Hotel,<br />
                            Pimpri Colony, Pimpri-Chinchwad,<br />
                            Maharashtra 411019
                        </p>
                    </div>
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
                    <div className="w-full">
                        <img src="/ioniclogo.png" alt="" className="object-contain w-full p-16 rounded-lg" />
                        <p className="w-full text-center mt-2 text-sm">Image showing location of metro station and office</p>
                    </div>
                </div>
            </div>

            <div className="container lg:flex w-full gap-10 responsive-padding py-16 rounded shadow-md relative">

                <form className="w-full lg:w-[40%]">
                    <p className="text-2xl font-semibold text-textcolorDark">Have any query?</p>
                    <div className="flex w-full pt-5">
                        <p className={`ml-3 text-center px-2 py-4 text-lg cursor-pointer ${contactType == "Write" ? "font-semibold border-b-2 border-blueb-700 text-blueb-700" : "text-gray-500"}`} onClick={() => setContactType("Write")}>Write Us</p>
                        <p className={`ml-3 text-center px-2 py-4 text-lg cursor-pointer ${contactType == "Appointment" ? "font-semibold border-b-2 border-blueb-700 text-blueb-700" : "text-gray-500"}`} onClick={() => setContactType("Appointment")}>Schedule Appointment</p>
                    </div>
                    <div className="mt-6 mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md outline-none focus:border-blueb-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">Phone</label>
                        <input type="phone" id="phone" name="phone" placeholder="Your Phone" className="w-full px-3 py-2 border rounded-md outline-none focus:border-blueb-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md outline-none focus:border-blueb-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">Industry</label>
                        <input type="email" id="email" name="email" placeholder="Your Industry" className="w-full px-3 py-2 border rounded-md outline-none focus:border-blueb-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">Organization</label>
                        <input type="email" id="email" name="email" placeholder="Your Organization" className="w-full px-3 py-2 border rounded-md outline-none focus:border-blueb-500" />
                    </div>
                    {
                        contactType == "Appointment" && <>
                            <div className="mb-4">
                                <label htmlFor="appointment-date" className="block text-sm font-semibold mb-2">Preferred Date</label>
                                <input type="date" id="appointment-date" name="appointment-date" className="w-full px-3 py-2 border rounded-md outline-none focus:border-blueb-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="appointment-time" className="block text-sm font-semibold mb-2">Preferred Time</label>
                                <input type="time" id="appointment-time" name="appointment-time" className="w-full px-3 py-2 border rounded-md outline-none focus:border-blueb-500" />
                            </div>
                        </>
                    }
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-semibold mb-2">Query</label>
                        <textarea id="message" name="message" rows={5} placeholder="Your Query" className="w-full px-3 py-2 border rounded-md outline-none focus:border-blueb-500"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-greeng-600 text-white font-semibold py-2 px-4 rounded hover:bg-blueb-700">{contactType == "Appointment" ? "Schedule Appointment" : "Send Message"}</button>
                    </div>
                </form>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15122.922505541159!2d73.79250328511964!3d18.63118198564944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b84e62f8c169%3A0xf6df110a3e44ab98!2sIonic%20Engineering%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1716738071408!5m2!1sen!2sin" className="w-full mt-10 lg:mt-0 lg:w-[60%] min-h-96" loading="lazy" ></iframe>
            </div>

            {/* <NewsLetter /> */}

        </div>
    )
}