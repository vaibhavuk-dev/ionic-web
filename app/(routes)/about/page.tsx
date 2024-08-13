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
                            <p className="text-md w-fit  mt-3 text-justify">Ionic Engineering Technology Pvt. Ltd. is a professionally managed ISO-9001/2015 company by people with over 35 years experience in water and waste water treatment. Ionic is dedicated to the design, supply, service and maintenance of water and wastewater treatment plant and equipment. The company was founded and managed by Mr. K V Raman, who has about 35 years of experience in water and waste water treatment. Mrs. Lalitha Iyer, the Director who is been working with Ionic for more than 15 years and taking care of General, Finance and Project Management. We provide a one-stop shop for integrated water and wastewater treatment needs, and focus on providing the optimum solution for every clients need. Now it is 14 years since Ionic Engineering Technology Pvt. Ltd. started operations with the main focus on technology, quality and performance related to water and waste water treatment solutions. </p>
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
                        <p className="text-center">Be one of the best solutions provider with innovative solutions which will be different, stimulating and productive, and one that can significantly reduce technical risks and costs, ensuring maximum returns to our customers and shareholders.</p>
                    </div>
                    <div className="w-full border border-blueb-500 p-5 rounded-lg justify-start items-center flex flex-col gap-3">
                        <p className="text-2xl font-bold text-green-700 uppercase">OUR VISION</p>
                        <p className="text-lmd font-bold uppercase">Vision – Helping Create a Livable Planet</p>
                        <p className="text-center">To Supply and implement solutions which meets and exceeds the needs and expectations of our clients by continuously providing them the solutions to reduce their water foot print and life cycle cost of water and waste water treatment by research and development(R&D) on new processes, technologies and products.</p>
                        <p className="text-center">To help customer understand the True Cost of Water and help them take an informed decision to reach their sustainable goals.</p>
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