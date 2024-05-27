import About from "@/components/About";
import AnyQuestion from "@/components/AnyQuestion";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
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

                <div className="fixed inset-0 flex items-center justify-center bg-logoBlue bg-opacity-50">
                    <h1 className="text-center font-bold text-white text-6xl">
                        We Treat Water - Differently
                    </h1>
                </div>
            </div>

            <div className="">
                <About data={data} />

                <ProductSection />

                <Blogs />

                <AnyQuestion />

                <Footer />
            </div>
        </div>
    );
}