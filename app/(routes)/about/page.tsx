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

            <div className="bg-blueb-700 mt-[90px] py-6 px-32 flex items-center gap-3">
                <img className="h-10" src="/icons/arrow-small-left.svg" alt="" />
                <h1 className="text-3xl font-semibold text-white">About Us</h1>
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
            </div>

            <div style={{backgroundImage: `url("/about/water-drop-bg.jpeg")`}}>

            </div>

            <GlobalPresence />

            <NewsLetter />

            <Footer />
        </div>
    )
}