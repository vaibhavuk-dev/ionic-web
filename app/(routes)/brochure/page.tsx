import WaterflowComponent from "@/components/homepage/WaterflowComponent ";
import NavBar from "@/components/NavBar";

export default function BrochurePage() {

    return (
        <div>
            <NavBar shouldWhite={true} />

            <div
                className="bg-blueb-700 mt-[110px] py-6 flex items-center gap-3 h-[200px]"
                style={{
                    backgroundImage: "url('/banner/bridge-banner.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex flex-col gap-3 px-32 bg-blueb-700 py-6 rounded-e-3xl bg-opacity-80">
                    <h1 className="text-4xl font-bold text-white drop-shadow-lg">Product Brochures</h1>
                    <p className="text-xl font-light text-white drop-shadow-lg">
                        Discover Our Solutions – Explore the Product Brochure!
                    </p>
                </div>
            </div>

            <div className="px-32 py-10">
                <p className="text-xl font-semibold">Brochure</p>
                <div className="grid grid-cols-4 gap-5">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((id, index) => (
                        <div key={index} className="mt-5 w-fit flex flex-col gap-3 items-center">
                            <img className="h-64 w-fit rounded-xl" src="/brochure.png" />
                            <p>Download (PDF)</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}