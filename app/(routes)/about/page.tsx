import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ImageCarousal from "@/components/about/ImageCarousal";
import GlobalPresence from "@/components/homepage/GlobalPresence";
import NewsLetter from "@/components/homepage/NewsLetter";
import { url } from "inspector";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About us",
    description: "",
};


export default function AboutPage() {

    return (
        <div>
            <NavBar shouldWhite={true} />

            <div
                className="mt-[100px] flex items-center gap-3 h-[200px]"
                style={{
                    backgroundImage: "url('/banner/bridge-banner.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex flex-col justify-center bg-blueb-700 w-full h-full bg-opacity-60 text-center">
                    <h1 className="text-5xl font-bold text-white drop-shadow-lg">About Ionic</h1>
                    <p className="mt-4 text-2xl font-light text-white drop-shadow-lg">
                        Our Journey, Your Success. Discover Who We Are.
                    </p>
                </div>
            </div>

            <div className="flex flex-col py-10 px-32 gap-5 items-center justify-center">

                <ImageCarousal />

                <div className="flex flex-col gap-5">
                    <p className="text-4xl text-center font-semibold">We are revolutionizing Water Treatment Solutions</p>
                    <p className="text-center px-10 text-xl">Ionic Engineering Technology Pvt. Ltd. pioneers ISO-certified water and wastewater treatment solutions with over 35 years of expertise. Led by industry veterans, we offer tailored services, emphasizing quality, performance, and sustainability.</p>
                </div>

                <div className="mt-12">
                    <div className="flex gap-10">
                        <div className="w-full">
                            <p className="text-2xl font-semibold">Who We Are</p>
                            <p className="text-md w-fit  mt-3 text-justify">
                                Ionic Engineering Technology Pvt. Ltd. is a professionally managed ISO-9001/2015 certified company with over 35 years of experience in water and wastewater treatment. We are dedicated to the design, supply, service, and maintenance of water and wastewater treatment plants and equipment. <br></br><br></br>
                                Founded by Mr. K V Raman, who has over 35 years of experience in water and wastewater treatment, Ionic is managed with a deep commitment to excellence and innovation. Mrs. Lalitha Iyer, our Director, has been with Ionic for more than 15 years, overseeing General Management, Finance, and Project Management. Together, they lead a team that provides integrated solutions, delivering the right approach for every client’s water treatment needs.
                                <br></br><br></br>
                                At Ionic, we are not just another vendor or supplier – we are a business partner focused on understanding the specific requirements of each client and offering techno-economical value-engineered solutions. Our approach is driven by our belief that only in the well-being of our customers can we truly succeed.
                                <br></br><br></br>
                                Now, 19 years since our inception, we continue to lead the way in water and wastewater treatment, focusing on technology, quality, and performance. Our mission is clear: “Remove Everything from Water – Except Hydrogen & Oxygen” and provide our customers with “Peace of Mind” rather than just a piece of equipment. We aim to change the way industries treat water, making it more efficient, sustainable, and cost-effective. That’s why we say, “We Treat Water – Differently.”
                            </p>
                        </div>
                        <div className="w-full">
                            <img src="/ioniclogo.png" alt="" className="object-contain w-full h-full p-16 rounded-lg" />
                            {/* <p className="w-full text-center mt-2 text-sm">Water Harvester Plant</p> */}
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="flex gap-10">
                        <div className="w-full">
                            <p className="text-2xl font-semibold">Our Philosophy</p>
                            <p className="text-md w-fit  mt-3 text-justify">
                                When we started, our goal was never to be just another supplier. We wanted to be a solutions provider that truly understood the unique needs of each client. We ask the right question: “What is the True Cost of Water?” Water and wastewater treatment is often taken for granted, with many organizations ignoring the importance of technology, quality, performance, monitoring, operation, and maintenance. This can lead to poor performance, repeated failures, high power consumption, increased chemical costs, high maintenance, and water wastage.
                                <br></br><br></br>
                                Unfortunately, many management teams are unaware that their system is full of “holes,” and their money is leaking out like water. They often fail to realize that their profitability depends on the efficiency and sustainability of their manufacturing processes, and they don’t ask the necessary questions to ensure their operations are optimized.
                                <br></br><br></br>
                                With the ever-increasing scarcity of water and stringent wastewater discharge norms, many industries see this as a serious problem, but at Ionic, we view it as an opportunity to clean up our act and make a difference. We don’t just talk about the 3 R’s – Reduce, Recycle, and Reuse – we show businesses how and where to reduce, recycle, and reuse water in practical, cost-effective ways.

                            </p>
                        </div>
                        <div className="w-full">
                            <img src="/ioniclogo.png" alt="" className="object-contain w-full h-full p-16 rounded-lg" />
                            {/* <p className="w-full text-center mt-2 text-sm">Water Harvester Plant</p> */}
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="flex gap-10">
                        <div className="w-full">
                            <p className="text-2xl font-semibold">An Integrated Approach</p>
                            <p className="text-md w-fit  mt-3 text-justify">
                                To truly solve water challenges, isolated approaches don’t work. What’s needed is a step-by-step, integrated approach. We've seen firsthand how the non-availability of clean water and challenges with wastewater disposal can severely hamper industrial operations, sometimes even threatening business closure or expansion.
                                <br></br><br></br>
                                The shortage of potable water can lead to the migration of populations, disrupting industries and agriculture alike. In cases where water is available, it may come at a considerable cost and in poor quality, requiring expensive and complex treatment solutions.
                                Water is a vital utility, just like electricity or fuel, and the more efficiently it is used, the more money is saved.
                            </p>
                        </div>
                        <div className="w-full">
                            <img src="/ioniclogo.png" alt="" className="object-contain w-full h-full p-16 rounded-lg" />
                            {/* <p className="w-full text-center mt-2 text-sm">Water Harvester Plant</p> */}
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="flex gap-10">
                        <div className="w-full">
                            <p className="text-2xl font-semibold">Our Solution</p>
                            <p className="text-md w-fit  mt-3 text-justify">
                                To mitigate the growing challenges of water scarcity, Ionic Engineering Technology Pvt. Ltd. offers innovative solutions that enable industries to reduce their water footprint. By adopting our state-of-the-art systems and technologies, we help businesses not only meet compliance standards but also improve water efficiency, cut costs, and support sustainable growth.
                                <br></br><br></br>
                                We also specialize in water recovery and reuse, helping industries reduce their water footprint and operational costs. Through Zero Liquid Discharge (ZLD) ,we enable industries to recycle and reuse treated water, drastically reducing dependency on fresh water sources.
                                <br></br><br></br>
                                We believe that by treating water differently, we can transform how industries manage this essential resource, ensuring that it is used responsibly and efficiently for a greener, more sustainable future.

                            </p>
                        </div>
                        <div className="w-full">
                            <img src="/ioniclogo.png" alt="" className="object-contain w-full h-full p-16 rounded-lg" />
                            {/* <p className="w-full text-center mt-2 text-sm">Water Harvester Plant</p> */}
                        </div>
                    </div>
                </div>

                <div className="w-full flex gap-10 mt-10">
                    <div className="w-full border border-blueb-500 p-5 rounded-lg justify-start items-center flex flex-col gap-3">
                        <p className="text-2xl font-bold text-blueb-700 uppercase">OUR MISSION</p>
                        <p className="text-lmd font-bold uppercase">Mission – To Treat Water `&quot;`Differently`&quot;`</p>
                        <p className="text-center">IONIC will be a performance oriented and customer centric company to present globally.</p>
                        <p className="text-center">Increasing our footprint and market share Year On Year (YOY) in the markets we operate.</p>
                        <p className="text-center">Be one of the best solutions providers with innovative solutions which will be different, stimulating and productive, and one that can significantly reduce technical risks and costs, ensuring maximum returns to our customers and shareholders.</p>
                    </div>
                    <div className="w-full border border-blueb-500 p-5 rounded-lg justify-start items-center flex flex-col gap-3">
                        <p className="text-2xl font-bold text-green-700 uppercase">OUR VISION</p>
                        <p className="text-lmd font-bold uppercase">Vision – Helping Create a Livable Planet</p>
                        <p className="text-center">To Supply and implement solutions which meet and exceed the needs and expectations of our clients by continuously providing them the solutions to reduce their water footprint and life cycle cost of water and wastewater treatment by research and development(R&D) on new processes, technologies and products.</p>
                        <p className="text-center">To help customers understand the True Cost of Water and help them take an informed decision to reach their sustainable goals.</p>
                        <p className="text-center"></p>
                    </div>
                </div>

            </div>

            <div style={{ backgroundImage: `url("/about/water-drop-bg.jpeg")` }}>

            </div>


            <GlobalPresence />

            <NewsLetter />

            <Footer />
        </div>
    )
}