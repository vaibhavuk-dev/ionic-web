import AnyQuestion from "@/components/AnyQuestion";
import Footer from "@/components/Footer";
import NavBarWhite from "@/components/NavBarWhite";

export default function Blog() {

    return (
        <div>
            <NavBarWhite />

            <div className="w-full px-32 mt-20  py-16 flex gap-10">
                <div className="w-[65%]">
                    <div className="">
                        <p className="bg-blueb-50 py-1 px-2 rounded-lg text-sm w-fit text-blueb-800">Blog</p>
                        <h1 className="mt-3 text-3xl font-semibold text-black">Scientist found new way to treat Waste Water</h1>
                        {/* <p className="text-xl font-light mt-2">Explore our recent water, wastewater, and reuse projects from across the globe.</p> */}
                        <img className="mt-5 w-full" src="/blogs/blog1.png" alt="" />
                    </div>

                    <p className="text-md mt-10">
                        <b className="text-lg">Background</b><br />
                        To comply with new and expanding government regulations for wastewater reuse, Taiping village, a community of 5,000 residents in China's Henan Province, needed a wastewater treatment plant to deal with effluent that previously had gone untreated in this rural setting.
                        <br /><br />
                        <b className="text-lg">Challenges</b><br />
                        The village's remote location and limited accessibility made it difficult to deliver the system and equipment by normal methods. And, the schedule for complete installation and commissioning was very tight at 10 days. Installation was scheduled during the region's rainy season, which caused occasional water flows that impacted influent design parameters and equipment scope.
                        <br /><br />
                        <b className="text-lg">Solutions</b><br />
                        A 300 m³/d Fluence Aspiral™ MABR-based plant was chosen due to its innovative capabilities and unique advantages, including low energy consumption, smart remote monitoring and control, efficient nitrogen and phosphorus removal, and its modular, portable, scalable design.
                        <br /><br />
                        <b className="text-lg">Results</b><br />
                        The decentralized treatment plant, which doesn't need to be tied in to a central treatment facility, produces an effluent that exceeds the rigid Class 1A standards mandated by China's latest five-year plan. It's environmentally friendly and economical, with low capital and operating expenses. Because Aspiral is modular and scalable, the plant can be expanded as needed.
                        <br /><br />
                        Are you interested in learning more about the advantages of Aspiral™ Smart Packaged wastewater plants? Contact Fluence to discuss your wastewater treatment needs with our experts.
                    </p>

                </div>
                <div className="w-[35%]">

                    <div className="sticky top-32 bg-blueb-50 mx-5 p-5 flex flex-col gap-3 items-center justify-center rounded-lg">
                        <p className="text-lg text-gray-500">Our Products</p>
                        <img className="px-10" src="/qcdm_model.png" alt="" />
                        <p className="text-xl font-semibold text-blue-950">Quick Cycle DM</p>
                        <button className="bg-complementary py-2 text-white px-2 rounded-md text-sm">Contact Us</button>
                        <button className="bg-blueb-700 py-2 text-white px-2 rounded-md text-sm">Download Brochure</button>
                    </div>

                </div>
            </div>

            <AnyQuestion />
            <Footer />
        </div>
    )
}