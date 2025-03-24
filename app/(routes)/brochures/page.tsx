import BrochureDownloads from "@/components/brochures/BrochureDownloads";
import WaterflowComponent from "@/components/homepage/WaterflowComponent ";
import NavBar from "@/components/NavBar";

export default function BrochurePage() {

    return (
        <div>
            
        <div
            className="flex items-center"
            style={{
                backgroundImage: "url('/banner/bridge-banner.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="pt-12 pb-6 flex flex-col justify-center bg-secondary w-full h-full bg-opacity-90 text-center">
                <h1 className="text-4xl font-bold text-white drop-shadow-lg">Product Brochures</h1>
                <p className="mt-4 text-xl font-light text-white drop-shadow-lg px-32 text-center">
                Discover Our Solutions – Explore the Product Brochure!
                </p>
            </div>
        </div>

            <BrochureDownloads />

            {/* <div className="px-32 py-10">
                <p className="text-xl font-semibold">Brochure</p>
                <div className="grid grid-cols-4 gap-5">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((id, index) => (
                        <div key={index} className="mt-5 w-fit flex flex-col gap-3 items-center">
                            <img className="h-64 w-fit rounded-xl" src="/brochure.png" />
                            <p>Download (PDF)</p>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    )
}