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

            <div className="relative w-full max-h-screen overflow-hidden">
                {/* Video Background */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/bg_video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />

                {/* Gradient Overlay */}
                <div className="fixed inset-0 flex flex-col gap-8 items-center justify-center bg-blueb-gradient-opacity-50"></div>

                {/* Main Content Container */}
                <div className="relative w-full h-full flex flex-col justify-between">
                    {/* Centered Text Content */}
                    <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 pt-20">
                        <div className="max-w-4xl w-full space-y-8">
                            {/* Headlines */}
                            <div className="space-y-4 text-center">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                                    We Treat Water - Differently
                                </h1>
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
                                    "Clear solution for troubled waters"
                                </h2>
                            </div>

                            {/* Poem */}
                            <div className="space-y-3">
                                <p className="font-light text-white text-base md:text-lg lg:text-xl text-center italic">
                                    IONIC is our name, Clean water is our flame.
                                </p>
                                <p className="font-light text-white text-base md:text-lg lg:text-xl text-center italic">
                                    We remove everything from water, Except - Hydrogen and oxygen,
                                </p>
                                <p className="font-light text-white text-base md:text-lg lg:text-xl text-center italic">
                                    With every drop we treat, we make it even more pure
                                </p>
                                <p className="font-light text-white text-base md:text-lg lg:text-xl text-center italic">
                                    As we build a sustainable future we help create a livable Earth!
                                </p>
                                <p className="font-light text-white text-base md:text-lg lg:text-xl text-center italic">
                                    So here's to IONIC A beacon of hope, Helping humanity to cope.
                                </p>
                            </div>

                            {/* Highlight Box */}
                            <div className="w-full bg-[#77B82A] py-3">
                                <p className="text-center text-white text-base md:text-lg lg:text-xl">
                                    We Remove Everything from Water{' '}
                                    <span className="font-bold">Except - "Hydrogen & Oxygen"</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Pipeline Section */}
                    <div className="relative w-full mt-4 max-w-7xl mx-auto items-center justify-center">
                        {/* Mobile Pipeline */}
                        <img
                            src="/waterflow/flow.png"
                            alt="Water Treatment Process"
                            className="w-full block lg:hidden"
                        />

                        {/* Desktop Pipeline */}
                        <div className="hidden lg:block w-full">
                            <img
                                src="/waterflow/flow.png"
                                alt="Water Treatment Process"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
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
                                Water is the most precious resource, essential for life, yet often taken for granted. Despite its critical importance, water scarcity has led to conflicts, exploitation, and commercialization, transforming what was once free into an expensive necessity. If we don't act responsibly now, we risk leaving future generations with a world with insufficient water, threatening livelihoods and society itself. While nature offers abundant seawater, its conversion remains costly, and no alternative to water exists. As individuals with the ability to think and act, let us commit to conserving water and addressing the crisis as part of our responsibility toward a sustainable future. At Ionic, we invite you to explore our innovative water and wastewater solutions, designed to highlight the true value of water and secure a better tomorrow.
                            </p>

                            {/* Button */}
                            <Link href="/products" className="px-6 py-3 text-white bg-blueb-gradient rounded shadow hover:bg-blueb-700">
                                Explore Products
                            </Link>
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
                                We are delighted to share that Ionic Engineering Technology Pvt. Ltd. has been awarded the prestigious. "G.S.Parkhe Award for Innovation In Entrepreneurship" by MCCIA ( Mahratta Chamber Of Commerce, Industries and Agriculture). MCCIA is a ninety year old chamber of commerce. Ionic was selected out of 160 entries for the innovation award and adjudged the winner by a panel of Eminent Industrialists. The innovation award was provided for the "Water Harvester" Zero Liquid Discharge Project we completed for Toyota Industries India at Bangalore in which we convert the industrial waste water into reusable water. The technological process of converting Wastewater into Clear and Clean reusable water helps the industries achieve sustainable environment friendly manufacturing operations meeting Corporate Social Environmental Responsibility (CSER) initiative and government environmental compliance regulatory requirement.
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

            {/* <div className="flex flex-col w-full py-16 gap-16 mx-auto  bg-blueb-gradient  responsive-padding rounded shadow-md relative">
                <Testimonials />
            </div> */}

            {/* <div className="flex flex-col w-full py-16 gap-16 mx-auto bg-white responsive-padding rounded shadow-md relative">
                <NewsArticlesGrid />
            </div> */}

            {/* <div className="flex flex-col w-full py-16 gap-16 mx-auto  bg-blueb-gradient  responsive-padding rounded shadow-md relative">
                <BlogArticlesGrid />
            </div> */}

            <div className="flex flex-col w-full py-16 gap-16 mx-auto bg-white responsive-padding rounded shadow-md relative">
                <hr></hr>
                <ContactForm />
            </div>


        </div>
    );
}