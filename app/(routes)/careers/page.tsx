import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import NewsLetter from "@/components/homepage/NewsLetter";

export default function CareerPage() {

    return (
        <div>
            <NavBar shouldWhite={true}/>

            <div className="bg-blueb-700 mt-[90px] py-6 px-32 flex items-center gap-3">
                <img className="h-10" src="/icons/arrow-small-left.svg" alt="" />
                <h1 className="text-3xl font-semibold text-white">Careers</h1>
            </div>


            <NewsLetter />
            <Footer />
        </div>
    )
}