import ImageCarousal from "@/components/about/ImageCarousal";
import ContactForm from "@/components/homepage/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About us",
    description: "",
};


export default function AboutPage() {

    const carouselImages: string[] = [
        "/about/banner00001.jpg",
        "/about/banner00002.jpg",
        "/about/banner00003.jpg",
        "/about/banner00004.jpg",
        "/about/banner00005.jpg",
        "/about/banner00006.jpg",
        "/about/banner00007.jpg",
        "/about/banner00008.jpg",
        "/about/banner00009.jpg",
        "/about/banner00010.jpg",
        "/about/banner00011.jpg",
        "/about/banner00012.jpg",
        "/about/banner00013.jpg",
        "/about/banner00014.jpg",
        "/about/banner00015.jpg",
    ]

    return (
        <div className="">


            <div
                className="flex items-center"
                style={{
                    backgroundImage: "url('/banner/bridge-banner.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex flex-col justify-center bg-secondary w-full h-full bg-opacity-90 text-center responsive-padding py-4 lg:py-8">
                    <h1 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">About Ionic</h1>
                    <h2 className="text-md lg:text-xl font-light text-white drop-shadow-lg mt-2">
                        Our Journey, Your Success. Discover Who We Are.
                    </h2>
                </div>
            </div>

            <div className="flex flex-col w-full gap-10 my-10 bg-white responsive-padding rounded relative justify-center max-w-7xl mx-auto">

                <div className="flex justify-center">
                    <ImageCarousal images={carouselImages}/>
                </div>


                <div className="flex flex-col gap-5">
                    <p className="text-2xl lg:text-3xl text-center font-semibold">We are revolutionizing Water Treatment Solutions</p>
                    <p className="text-center font-light text-lg lg:text-xl">Ionic Engineering Technology Pvt. Ltd. pioneers ISO-certified water and wastewater treatment solutions with over 35 years of expertise. Led by industry veterans, we offer tailored services, emphasizing quality, performance, and sustainability.</p>
                </div>
            </div>

            <div className="flex w-full gap-10 mx-auto bg-blueb-gradient responsive-padding rounded relative justify-center">

                <img
                    className="absolute inset-0 w-full h-full object-cover img-gradient-opacity "
                    src="/blogs/blog2.png"
                    alt="Background"
                />

                <section className="relative z-10 my-16">
                    <div className="container mx-auto px-4  grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Left Colum</section>n */}
                        <div>
                            {/* Section Label with Background */}
                            <div className="relative flex mb-4 gap-5 items-center justify-start w-full">
                                <p className="inline-block text-primary font-semibold uppercase px-2 bg-primaryLight rounded-md">
                                    About us
                                </p>
                                <div className="border-t-2 border-primaryLight mt-1 w-16"></div>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                                Who We Are
                            </h2>

                            {/* Supporting Text */}
                            <p className="text-white mb-6">
                                Ionic Engineering Technology Pvt. Ltd. is a professionally managed ISO-9001/2015 certified company with over 35 years of experience in water and wastewater treatment. We are dedicated to the design, supply, service, and maintenance of water and wastewater treatment plants and equipment. <br></br><br></br>
                                Founded by Mr. K V Raman, who has over 35 years of experience in water and wastewater treatment, Ionic is managed with a deep commitment to excellence and innovation. Mrs. Lalitha Iyer, our Director, has been with Ionic for more than 15 years, overseeing General Management, Finance, and Project Management. Together, they lead a team that provides integrated solutions, delivering the right approach for every client’s water treatment needs.
                                <br></br><br></br>
                                At Ionic, we are not just another vendor or supplier – we are a business partner focused on understanding the specific requirements of each client and offering techno-economical value-engineered solutions. Our approach is driven by our belief that only in the well-being of our customers can we truly succeed.
                                <br></br><br></br>
                                Now, 19 years since our inception, we continue to lead the way in water and wastewater treatment, focusing on technology, quality, and performance. Our mission is clear: “Remove Everything from Water – Except Hydrogen & Oxygen” and provide our customers with “Peace of Mind” rather than just a piece of equipment. We aim to change the way industries treat water, making it more efficient, sustainable, and cost-effective. That’s why we say, “We Treat Water – Differently.”
                            </p>
                        </div>

                        {/* Right Column */}
                        <img className="bg-secondaryLight rounded-lg h-64 md:h-full object-cover" src="/blogs/blog2.png" alt="Descriptive Alt Text" />
                    </div>
                </section>
            </div>

            <div className="flex w-full gap-10 mx-auto bg-white responsive-padding rounded relative justify-center">

                <section className="bg-white my-16">
                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                        {/* Right Column */}
                        <img className="bg-secondaryLight rounded-lg h-64 md:h-full object-cover" src="/blogs/blog2.png" alt="Descriptive Alt Text" />

                        {/* Left Column */}
                        <div>
                            {/* Section Label with Background */}
                            <div className="relative flex mb-4 gap-5 items-center">
                                <span className="absolute inset-y-0 left-0 w-full h-full bg-primaryLight -z-10 rounded-md"></span>
                                <p className="inline-block text-primary font-semibold uppercase px-2 bg-primaryLight rounded-md">
                                    Our Philosophy
                                </p>
                                <div className="border-t-2 border-primary mt-1 w-16"></div>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-3xl md:text-4xl font-bold text-textColorDark leading-tight mb-4">
                                Our Philosophy
                            </h2>

                            {/* Supporting Text */}
                            <p className="text-textcolor mb-6">
                                When we started, our goal was never to be just another supplier. We wanted to be a solutions provider that truly understood the unique needs of each client. We ask the right question: “What is the True Cost of Water?” Water and wastewater treatment is often taken for granted, with many organizations ignoring the importance of technology, quality, performance, monitoring, operation, and maintenance. This can lead to poor performance, repeated failures, high power consumption, increased chemical costs, high maintenance, and water wastage.
                                <br></br><br></br>
                                Unfortunately, many management teams are unaware that their system is full of “holes,” and their money is leaking out like water. They often fail to realize that their profitability depends on the efficiency and sustainability of their manufacturing processes, and they don’t ask the necessary questions to ensure their operations are optimized.
                                <br></br><br></br>
                                With the ever-increasing scarcity of water and stringent wastewater discharge norms, many industries see this as a serious problem, but at Ionic, we view it as an opportunity to clean up our act and make a difference. We don’t just talk about the 3 R’s – Reduce, Recycle, and Reuse – we show businesses how and where to reduce, recycle, and reuse water in practical, cost-effective ways.
                            </p>
                        </div>

                    </div>
                </section>
            </div>

            <div className="flex w-full gap-10 mx-auto bg-blueb-gradient responsive-padding rounded relative justify-center">

                <img
                    className="absolute inset-0 w-full h-full object-cover img-gradient-opacity "
                    src="/blogs/blog2.png"
                    alt="Background"
                />

                <section className="relative z-10 my-16">
                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Left Colum</section>n */}
                        <div>
                            {/* Section Label with Background */}
                            <div className="relative flex mb-4 gap-5 items-center justify-start w-full">
                                <p className="inline-block text-primary font-semibold uppercase px-2 bg-primaryLight rounded-md">
                                    About us
                                </p>
                                <div className="border-t-2 border-primaryLight mt-1 w-16"></div>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                                An Integrated Approach
                            </h2>

                            {/* Supporting Text */}
                            <p className="text-white mb-6">
                                To truly solve water challenges, isolated approaches do not work. What is needed is a step-by-step, integrated approach. We have seen firsthand how the non-availability of clean water and challenges with wastewater disposal can severely hamper industrial operations, sometimes even threatening business closure or expansion.
                                <br></br><br></br>
                                The shortage of potable water can lead to the migration of populations, disrupting industries and agriculture alike. In cases where water is available, it may come at a considerable cost and in poor quality, requiring expensive and complex treatment solutions.
                                Water is a vital utility, just like electricity or fuel, and the more efficiently it is used, the more money is saved.
                            </p>
                        </div>

                        {/* Right Column */}
                        <img className="bg-secondaryLight rounded-lg h-64 md:h-full object-cover" src="/blogs/blog2.png" alt="Descriptive Alt Text" />
                    </div>
                </section>
            </div>

            <div className="flex w-full gap-10 mx-auto bg-white responsive-padding rounded relative justify-center">

                <section className="bg-white my-16">
                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                        {/* Right Column */}
                        <img className="bg-secondaryLight rounded-lg h-64 md:h-full object-cover" src="/blogs/blog2.png" alt="Descriptive Alt Text" />

                        {/* Left Column */}
                        <div>
                            {/* Section Label with Background */}
                            <div className="relative flex mb-4 gap-5 items-center">
                                <span className="absolute inset-y-0 left-0 w-full h-full bg-primaryLight -z-10 rounded-md"></span>
                                <p className="inline-block text-primary font-semibold uppercase px-2 bg-primaryLight rounded-md">
                                    Our Solution
                                </p>
                                <div className="border-t-2 border-primary mt-1 w-16"></div>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-3xl md:text-4xl font-bold text-textColorDark leading-tight mb-4">
                                Our Solution
                            </h2>

                            {/* Supporting Text */}
                            <p className="text-textcolor mb-6">
                                To mitigate the growing challenges of water scarcity, Ionic Engineering Technology Pvt. Ltd. offers innovative solutions that enable industries to reduce their water footprint. By adopting our state-of-the-art systems and technologies, we help businesses not only meet compliance standards but also improve water efficiency, cut costs, and support sustainable growth.
                                <br></br><br></br>
                                We also specialize in water recovery and reuse, helping industries reduce their water footprint and operational costs. Through Zero Liquid Discharge (ZLD) ,we enable industries to recycle and reuse treated water, drastically reducing dependency on fresh water sources.
                                <br></br><br></br>
                                We believe that by treating water differently, we can transform how industries manage this essential resource, ensuring that it is used responsibly and efficiently for a greener, more sustainable future.
                            </p>
                        </div>

                    </div>
                </section>
            </div>


            <div className="flex w-full gap-10 bg-white rounded relative justify-center max-w-7xl mx-auto">

                <div className="w-full flex flex-col lg:flex-row gap-10 mt-10">
                    <div className="w-full border border-blueb-500 p-5 rounded-lg justify-start items-center flex flex-col gap-3">
                        <p className="text-2xl font-bold text-blueb-700 uppercase">OUR MISSION</p>
                        <p className="text-lmd font-bold uppercase">Mission – To Treat Water &quot;Differently&quot;</p>
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

            {/* <GlobalPresence /> */}

            {/* <NewsLetter /> */}

            <div className="flex flex-col w-full py-16 gap-16 mx-auto bg-white responsive-padding rounded shadow-md relative">
                <ContactForm />
            </div>


        </div>
    )
}