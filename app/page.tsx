import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import BlogArticlesGrid from "@/components/homepage/BlogArticlesGrid";
import ClientsSection from "@/components/homepage/ClientsSection";
import ContactForm from "@/components/homepage/ContactForm";
import NewsArticlesGrid from "@/components/homepage/NewsArticlesGrid";
import SolutionsSection from "@/components/homepage/SolutionsSection";
import StickySidebar from "@/components/homepage/StickySidebar";
import Testimonials from "@/components/homepage/Testimonials";
import VisionMissionSection from "@/components/homepage/VisionMissionSection";
import Link from "next/link";

export default async function Home() {

    return (
        <div>

            <StickySidebar />

            <div className="relative w-full h-screen">
                <video
                    className="fixed w-full h-full object-cover overflow-hidden"
                    src="/bg_video.mp4"
                    autoPlay
                    muted
                    loop
                />

                <div className="fixed inset-0 flex flex-col gap-8 items-center justify-center bg-blueb-gradient-opacity-50 py-14 mt-20">
                    <div className="flex flex-col gap-4 items-center">
                        <h1 className="text-center font-bold text-white text-4xl responsive-padding">
                            We Treat Water - Differently
                        </h1>
                        <h2 className="text-center font-semibold text-white text-2xl responsive-padding">
                            "Clear solution for trouble waters"
                        </h2>
                    </div>
                    <p className="font-light text-white text-lg responsive-padding text-justify responsive-padding lg:w-1/2">
                        Ionic Engineering Technology Pvt. Ltd. pioneers ISO-certified water and wastewater treatment solutions with over 35 years of expertise. Led by industry veterans, we offer tailored services, emphasizing quality, performance, and sustainability.
                    </p>
                    <p className="text-center py-3 font-medium text-white text-lg lg:text-xl w-full bg-secondary responsive-padding">
                        We Remove Everything from Water <span className="font-bold">Except - “Hydrogen & Oxygen”</span>
                    </p>
                    <img className="w-full flex lg:hidden flex-col items-center justify-center" src="/waterflow/flow.png" />
                </div>

                <img className="w-full hidden lg:flex fixed bottom-0 flex-col items-center justify-center" src="/waterflow/flow.png" />

                {/* <WaterflowComponent /> */}
                {/* <ImageCarousalHome /> */}

            </div>

            <div className="flex w-full gap-10 mx-auto bg-white responsive-padding rounded shadow-md relative justify-center">

                <section className="bg-white my-16">
                    <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                        {/* Right Column */}
                        <img className="w-full rounded-lg h-2/3 md:h-2/3 object-contain" src="/homepage/ionicglobe.png" alt="Descriptive Alt Text" />

                        {/* Left Column */}
                        <div>
                            {/* Section Label with Background */}
                            <div className="relative flex mb-4 gap-5 items-center">
                                <span className="absolute inset-y-0 left-0 w-full h-full bg-primaryLight -z-10 rounded-md"></span>
                                <h2 className="inline-block text-primary font-semibold uppercase px-2 bg-primaryLight rounded-md">
                                    Secure Water, Secure Tomorrow
                                </h2>
                                <div className="border-t-2 border-primary mt-1 w-16"></div>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-3xl md:text-4xl font-bold text-textColorDark leading-tight mb-4">
                                Securing Tomorrow by Saving Water Today
                            </h2>

                            {/* Supporting Text */}
                            <p className="text-textcolor mb-6">
                                Water is the most precious resource, essential for life, yet often taken for granted. Despite its critical importance, water scarcity has led to conflicts, exploitation, and commercialization, transforming what was once free into an expensive necessity. If we don't act responsibly now, we risk leaving future generations a world with insufficient water, threatening livelihoods and society itself. While nature offers abundant seawater, its conversion remains costly, and no alternative to water exists. As individuals with the ability to think and act, let us commit to conserving water and addressing the crisis as part of our responsibility toward a sustainable future. At Ionic, we invite you to explore our innovative water and wastewater solutions, designed to highlight the true value of water and secure a better tomorrow.
                            </p>

                            {/* Button */}
                            <button className="px-6 py-3 text-white bg-blueb-gradient rounded shadow hover:bg-blueb-700">
                                Explore Products
                            </button>
                        </div>

                    </div>
                </section>
            </div>

            <div className="flex w-full gap-10 mx-auto bg-blueb-gradient responsive-padding rounded shadow-md relative border-t justify-center">

                <img
                    className="absolute inset-0 w-full h-full object-cover img-gradient-opacity "
                    src="/homepage/ionicaward.jpg"
                    alt="Background"
                />

                <section className="relative z-10 my-16">
                    <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Left Colum</section>n */}
                        <div>
                            {/* Section Label with Background */}
                            <div className="relative flex mb-4 gap-5 items-center justify-start w-full">
                                <p className="inline-block text-primary font-semibold uppercase px-2 bg-primaryLight rounded-md">
                                    Our Achievements
                                </p>
                                <div className="border-t-2 border-primaryLight mt-1 w-16"></div>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                                Awards & Recognitions
                            </h2>

                            {/* Supporting Text */}
                            <p className="text-white mb-6">
                                We are delighted to share that Ionic Engineering Technology Pvt. Ltd. has been awarded the prestigious. "G.S.Parkhe Award for Innovation In Entrepreneurship" by MCCIA ( Mahratta Chamber Of Commerce, Industries and Agriculture). MCCIA is a ninety year old chamber of commerce. Ionic was selected out of 160 entries for the innovation award and adjudged the winner by a panel of Eminent Industrialist. The innovation award was provided for the "Water Harvester" Zero Liquid Discharge Project we completed for Toyota Industries India at Bangalore in which we convert the industrial waste water into reusable water. The technological process of converting Wastewater into Clear and Clean reusable water helps the industries achieve sustainable environment friendly manufacturing operations meeting Corporate Social Environmental Responsibility (CSER) initiative and government environmental compliance regulatory requirement.
                            </p>
                        </div>

                        {/* Right Column */}
                        <img className="bg-secondaryLight rounded-lg object-cover" src="/homepage/ionicaward.jpg" alt="Descriptive Alt Text" />
                    </div>
                </section>
            </div>

            <div className="flex flex-col w-full py-12 gap-16 mx-auto bg-white responsive-padding rounded shadow-md relative">
                <SolutionsSection />
            </div>

            <div className="flex flex-col w-full py-16 gap-16 mx-auto  bg-blueb-gradient  responsive-padding rounded shadow-md relative">
                <ClientsSection />
            </div>

            <div className="flex flex-col w-full py-16 gap-16 mx-auto bg-white responsive-padding rounded shadow-md relative">
                <VisionMissionSection />
            </div>

            <div className="flex flex-col w-full py-16 gap-16 mx-auto  bg-blueb-gradient  responsive-padding rounded shadow-md relative">
                <Testimonials />
            </div>

            <div className="flex flex-col w-full py-16 gap-16 mx-auto bg-white responsive-padding rounded shadow-md relative">
                <NewsArticlesGrid />
            </div>

            <div className="flex flex-col w-full py-16 gap-16 mx-auto  bg-blueb-gradient  responsive-padding rounded shadow-md relative">
                <BlogArticlesGrid />
            </div>

            <div className="flex flex-col w-full py-16 gap-16 mx-auto bg-white responsive-padding rounded shadow-md relative">
                <ContactForm />
            </div>


        </div>
    );
}