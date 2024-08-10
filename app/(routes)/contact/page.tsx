import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import NewsLetter from "@/components/homepage/NewsLetter";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact us",
    description: "",
};

export default function ContactPage() {

    return (
        <div>
            <NavBar shouldWhite={true} />

            <div
                className="bg-blueb-700 mt-[110px] py-6 flex items-center gap-3 h-[200px]"
                style={{
                    backgroundImage: "url('/banner/bridge-banner.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex flex-col gap-3 px-32 bg-blueb-700 py-6 rounded-e-3xl bg-opacity-80">
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

            <div className="flex w-full gap-10 mx-auto bg-white px-32 py-16 rounded shadow-md relative">

                <form className="w-[40%]">
                    <h2 className="text-2xl mb-6">Have any query?</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                        <textarea id="message" name="message" rows={5} placeholder="Your Message" className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-blueb-700 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">Send Message</button>
                    </div>
                </form>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15122.922505541159!2d73.79250328511964!3d18.63118198564944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b84e62f8c169%3A0xf6df110a3e44ab98!2sIonic%20Engineering%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1716738071408!5m2!1sen!2sin" className="w-[60%] min-h-[100%]" loading="lazy" ></iframe>
            </div>

            <NewsLetter />
            <Footer />
        </div>
    )
}