import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import JobApplicationForm from "@/components/careers/JobApplicationForm";
import JobOpenings from "@/components/careers/JobOpenings";
import NewsLetter from "@/components/homepage/NewsLetter";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Career at Ionic",
    description: "",
};

export default function CareerPage() {

    return (
        <div>
            

            <div
                className="bg-blueb-700 mt-[110px] py-6 flex items-center gap-3 h-[200px]"
                style={{
                    backgroundImage: "url('/banner/bridge-banner.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex flex-col gap-3 px-32 bg-blueb-700 py-6 rounded-e-3xl bg-opacity-80">
                    <h1 className="text-4xl font-bold text-white drop-shadow-lg">Careers at Ionic Engineering Technology Pvt. Ltd.</h1>
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
                            <p className="text-2xl w-fit font-semibold"></p>
                            <p className="text-lg w-fit text-justify mt-3">At Ionic Engineering Technology Pvt. Ltd., we are not just a company, we are a family of passionate professionals dedicated to innovating and providing cutting-edge water and wastewater treatment solutions. As an ISO-9001/2015 certified company with over 35 years of experience, we are proud to deliver sustainable, efficient, and cost-effective water management solutions to industries worldwide. If you are looking for a career that makes an impact, offers growth, and fosters an innovative environment, Ionic is the place for you.</p>
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
                            <p className="text-2xl w-fit font-semibold">Why Work With Us?</p>
                            <p className="text-lg w-fit text-justify mt-3">At Ionic, we believe in career growth and continuous learning. We offer our employees opportunities to develop their skills and advance their careers through mentorship, training programs, and hands-on experience with the latest technologies in water treatment. You will work with a team of experts who share a passion for innovation, excellence, and sustainability, and you’ll have a chance to contribute to meaningful projects that make a difference in water management worldwide.
                                <br></br><br></br>
                                Our work environment is collaborative, inclusive, and designed to help you succeed. You’ll also be part of a company that values diversity, with equal opportunities for all, and encourages fresh ideas and creativity. We believe that your success is our success, and together we can shape the future of water treatment.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="">
                    {/* <h1 className="text-4xl text-center text-blueb-700 font-bold drop-shadow-lg">Explore Career Opprtuities at Ionic</h1>
                    <p className="text-xl text-center font-light drop-shadow-lg">
                        See current openings <span><img src="icons/angle-right-white.svg" className="w-4 h-4 inline-block fill-current text-blueb-500"></img></span>
                    </p> */}
                    <JobOpenings />
                    <JobApplicationForm />
                </div>
            </div>




            {/* <div
                className="bg-blueb-700 mt-12 flex items-center gap-3 h-[200px] border-b-8 border-b-blueb-700"
                style={{
                    backgroundImage: "url('/careers/join-us.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex flex-col gap-3 px-32 py-6 bg-blueb-700 bg-opacity-70  text-center items-center justify-center rounded-e-3xl">
                    <h1 className="text-4xl font-bold text-white drop-shadow-lg">Explore Career Opprtuities at Ionic</h1>
                    <p className="text-xl font-light text-white drop-shadow-lg">
                        See current openings <span><img src="icons/angle-right-white.svg" className="w-4 h-4 inline-block fill-current text-blueb-500"></img></span>
                    </p>
                </div>
            </div> */}

            <NewsLetter />
            
        </div>
    )
}