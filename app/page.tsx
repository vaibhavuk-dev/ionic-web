import About from "@/components/About";
import AnyQuestion from "@/components/AnyQuestion";
import Blogs from "@/components/Blogs";
import BlogsCarousal from "@/components/BlogsCarousal";
import CaseStudiesCarousal from "@/components/CaseStudiesCarousal";
import Footer from "@/components/Footer";
import ImageCarousalHome from "@/components/ImageCarousalHome";
import NavBar from "@/components/NavBar";
import ProductSection from "@/components/ProductSection";
import GlobalPresence from "@/components/homepage/GlobalPresence";
import NewsLetter from "@/components/homepage/NewsLetter";
import WaterflowComponent from "@/components/homepage/WaterflowComponent ";

export default async function Home() {

    const data = null;

    // const token = '61a38a965c943172f18269cd3fc43155f7125816c6c291706b5b7de42d574a99bfda3a6d99257600c4a619a371943faff7cacd3aff974d7e0667db14f1572103c183b74f594af0c81849a5ebf80abda8654c8f5418339f0877a961f8162314276f041eb35ff6405b6c38cde17cb12abdefa1437a8573cb28216c7eee3c8d0644';

    // const promises = [fetch('http://localhost:1337/api/texts', {
    //     method: 'GET',
    //     headers: {
    //         'Authorization': `Bearer ${token}`
    //     }
    // })];

    // const [data] = await Promise.all(promises);

    // const scrollToTop = () => {
    //     document.documentElement.scrollIntoView({
    //         behavior: "smooth",
    //         block: "start",
    //     });
    // };

    // const [isVisible, setIsVisible] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const threshold = 300;
    //         const currentScrollY = window.scrollY;
    //         setIsVisible(currentScrollY > threshold);
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

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

                <WaterflowComponent />
                {/* <ImageCarousalHome /> */}

            </div>


            <div className="w-full bg-white">
                <About data={data} />

                <ProductSection />
            </div>

            <div className="bg-white">
                <CaseStudiesCarousal
                    data={[
                        { post_title: "Case Studies: Successful Wastewater Treatment through Bioremediation", post_slug: "/case-study/1", post_image: "/blogs/blog2.png" },
                        { post_title: "Why Municipal Wastewater Treatment Is Important?", post_slug: "/blogs/1", post_image: "/blogs/blog4.png" },
                        { post_title: "7 Benefits Of Wastewater Treatment", post_slug: "/blogs/1", post_image: "/blogs/blog3.png" },
                        { post_title: "Monroe Environmental Saves Steel Mill $145,000 on Clarifier Upgrade", post_slug: "/case-study/1", post_image: "/casestudy/cs4.png" },
                    ]} />
            </div>

            <div className="bg-white">
                <BlogsCarousal
                    data={[
                        { post_title: "Algae-based Wastewater Treatment", post_slug: "/blogs/1", post_image: "/blogs/blog2.png" },
                        { post_title: "Scientist found new way to treat Waste Water", post_slug: "/blogs/1", post_image: "/blogs/blog1.png" },
                        { post_title: "7 Benefits Of Wastewater Treatment", post_slug: "/blogs/1", post_image: "/blogs/blog3.png" },
                        { post_title: "Why Municipal Wastewater Treatment Is Important?", post_slug: "/blogs/1", post_image: "/blogs/blog4.png" },
                    ]} />

            </div>

            <div className="flex w-full gap-10 mx-auto bg-white px-32 py-8 rounded shadow-md relative">

                <form className="w-[40%]">
                    <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-bold mb-2">Message</label>
                        <textarea id="message" name="message" rows={5} placeholder="Your Message" className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-blueb-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Send Message</button>
                    </div>
                </form>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15122.922505541159!2d73.79250328511964!3d18.63118198564944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b84e62f8c169%3A0xf6df110a3e44ab98!2sIonic%20Engineering%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1716738071408!5m2!1sen!2sin" className="w-[60%] h-[400px]" loading="lazy" ></iframe>
            </div>

            <GlobalPresence />

            {/* <AnyQuestion /> */}

            <NewsLetter />

            <Footer />
        </div>
    );
}