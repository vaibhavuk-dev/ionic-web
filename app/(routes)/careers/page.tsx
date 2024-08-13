import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import NewsLetter from "@/components/homepage/NewsLetter";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Career at Ionic",
    description: "",
};

export default function CareerPage() {

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
                    <h1 className="text-4xl font-bold text-white drop-shadow-lg">Careers at Ionic</h1>
                    <p className="text-xl font-light text-white drop-shadow-lg">
                        Opportunities Await. Step Into Your Next Challenge.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-20 my-20 px-32 bg-white">

                {/* <p className="w-full text-center mt-2 text-sm">Water Harvester Plant</p> */}

                <div className="">
                    <div className="flex gap-20">
                        <div className="w-full">
                            <p className="text-2xl w-fit font-semibold">Join a Legacy of Excellence</p>
                            <p className="text-lg w-fit text-justify mt-3">With over 35 years of experience in water and wastewater treatment, Ionic Engineering Technology Pvt. Ltd. is at the forefront of innovation and quality. Our commitment to excellence in design, supply, service, and maintenance ensures that we dont just treat water—we treat it differently. Be part of a team that values efficiency, sustainability, and the well-being of our clients.</p>
                        </div>
                        <div className="w-full">
                            <img src="/careers/career2.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
                            {/* <p className="w-full text-center mt-2 text-sm">Water Harvester Plant</p> */}
                        </div>
                    </div>
                </div>


                <div className="">
                    <div className="flex gap-20">
                        <div className="w-full">
                            <img src="/careers/career1.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
                            {/* <p className="w-full text-center mt-2 text-sm">Water Harvester Plant</p> */}
                        </div>
                        <div className="w-full">
                            <p className="text-2xl w-fit font-semibold">Shape the Future of Water Treatment</p>
                            <p className="text-lg w-fit text-justify mt-3">At Ionic, we believe in more than just providing solutions—we believe in making a difference. Founded by industry veterans, our company is driven by a passion for delivering the best possible outcomes for our clients. If you are looking to be part of a company that values technology, quality, and customer well-being, Ionic is the place for you.</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="flex gap-20">
                        <div className="w-full">
                            <p className="text-2xl w-fit font-semibold">Innovate with Impact</p>
                            <p className="text-lg w-fit text-justify mt-3">Water scarcity and waste management are global challenges, but at Ionic, we see them as opportunities for innovation. Our integrated, step-by-step approach to water and wastewater treatment helps industries reduce their water footprint and operate more efficiently. Join us in our mission to offer sustainable solutions that truly make a difference.</p>
                        </div>
                        <div className="w-full">
                            <img src="/careers/career2.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
                            {/* <p className="w-full text-center mt-2 text-sm">Water Harvester Plant</p> */}
                        </div>
                    </div>
                </div>
            </div>



            <div
                className="bg-blueb-700 mt-[100px] flex items-center gap-3 h-[200px] border-b-8 border-b-blueb-700"
                style={{
                    backgroundImage: "url('/careers/join-us.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex flex-col gap-3 px-32 py-6 bg-blueb-700 bg-opacity-70  text-center items-center justify-center rounded-e-3xl">
                    <h1 className="text-4xl font-bold text-white drop-shadow-lg">Explore Career Opprtuities at Ionic</h1>
                    <p className="text-xl font-light text-white drop-shadow-lg">
                        See current openings <span><img src="icons/angle-right-white.svg" className="w-4 h-4 inline-block fill-current text-blue-500"></img></span>
                    </p>
                </div> 
            </div>

            {/* <NewsLetter /> */}
            <Footer />
        </div>
    )
}