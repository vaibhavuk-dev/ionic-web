import About from "@/components/About";
import AnyQuestion from "@/components/AnyQuestion";
import Blogs from "@/components/Blogs";
import BlogsCarousal from "@/components/BlogsCarousal";
import CaseStudiesCarousal from "@/components/CaseStudiesCarousal";
import Footer from "@/components/Footer";
import ImageCarousalHome from "@/components/ImageCarousalHome";
import NavBar from "@/components/NavBar";
import ProductSection from "@/components/ProductSection";

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

                <ImageCarousalHome />

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

            <AnyQuestion />

            <Footer />
        </div>
    );
}