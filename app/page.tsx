import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import BlogArticlesGrid from "@/components/homepage/BlogArticlesGrid";
import ContactForm from "@/components/homepage/ContactForm";
import NewsArticlesGrid from "@/components/homepage/NewsArticlesGrid";
import Testimonials from "@/components/homepage/Testimonials";

export default async function Home() {

    return (
        <div>
            <NavBar />

            <div className="relative w-full h-screen">
                <video
                    className="fixed w-full h-full object-cover overflow-hidden"
                    src="/bg_video.mp4"
                    autoPlay
                    muted
                    loop
                />

                <div className="fixed inset-0 flex items-center justify-center bg-blueb-700 bg-opacity-50 pb-14">
                    <h1 className="text-center font-bold text-white text-6xl">
                        We Treat Water - Differently
                    </h1>
                </div>

                <img className="px-32 w-full fixed bottom-0 flex flex-col items-center justify-center" src="/waterflow/flow.png" />

                {/* <WaterflowComponent /> */}
                {/* <ImageCarousalHome /> */}

            </div>

            <div className="flex w-full gap-10 mx-auto bg-white px-32 rounded shadow-md relative">

                <section className="bg-white mt-16">
                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Left Column */}
                        <div>
                            {/* Section Label with Background */}
                            <div className="relative flex mb-4 gap-5 items-center">
                                <span className="absolute inset-y-0 left-0 w-full h-full bg-primaryLight -z-10 rounded-md"></span>
                                <p className="inline-block text-primary font-semibold uppercase px-2 bg-primaryLight rounded-md">
                                    Our Vision & Mission
                                </p>
                                <div className="border-t-2 border-primary mt-1 w-16"></div>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-3xl md:text-4xl font-bold text-textColorDark leading-tight mb-4">
                                Transforming Finances With Strategic Wealth Management
                            </h2>

                            {/* Supporting Text */}
                            <p className="text-textcolor mb-6">
                                Guiding you on your global financial success journey through
                                customized & personalized financial consulting services. Achieve
                                your goals with data-driven expertise and secure your financial
                                future, successfully navigating the ever-changing finance.
                            </p>
                            <p className="text-textcolor mb-6">
                                We're committed to providing you with expert guidance, proven
                                strategies & personalized approach to ensure financial prosperity.
                            </p>

                            {/* Button */}
                            <button className="px-6 py-3 text-white bg-primary rounded shadow hover:bg-blue-700">
                                Explore Products
                            </button>
                        </div>

                        {/* Right Column */}
                        <div className="bg-secondaryLight rounded-lg h-64 md:h-full"></div>
                    </div>
                </section>
            </div>

            <div className="flex w-full gap-10 mx-auto bg-white px-32 rounded shadow-md relative">

                <section className="bg-white mt-16">
                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                        {/* Right Column */}
                        <div className="bg-secondaryLight rounded-lg h-64 md:h-full"></div>

                        {/* Left Column */}
                        <div>
                            {/* Section Label with Background */}
                            <div className="relative flex mb-4 gap-5 items-center">
                                <span className="absolute inset-y-0 left-0 w-full h-full bg-primaryLight -z-10 rounded-md"></span>
                                <p className="inline-block text-primary font-semibold uppercase px-2 bg-primaryLight rounded-md">
                                    Our Vision & Mission
                                </p>
                                <div className="border-t-2 border-primary mt-1 w-16"></div>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-3xl md:text-4xl font-bold text-textColorDark leading-tight mb-4">
                                Transforming Finances With Strategic Wealth Management
                            </h2>

                            {/* Supporting Text */}
                            <p className="text-textcolor mb-6">
                                Guiding you on your global financial success journey through
                                customized & personalized financial consulting services. Achieve
                                your goals with data-driven expertise and secure your financial
                                future, successfully navigating the ever-changing finance.
                            </p>
                            <p className="text-textcolor mb-6">
                                We're committed to providing you with expert guidance, proven
                                strategies & personalized approach to ensure financial prosperity.
                            </p>

                            {/* Button */}
                            <button className="px-6 py-3 text-white bg-primary rounded shadow hover:bg-blue-700">
                                Explore Products
                            </button>
                        </div>

                    </div>
                </section>
            </div>

            <div className="flex flex-col w-full py-16 gap-16 mx-auto bg-white px-32 rounded shadow-md relative">
                <Testimonials />
                <NewsArticlesGrid />
                <BlogArticlesGrid />
                <ContactForm />
            </div>

            <Footer />
        </div>
    );
}