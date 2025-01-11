import GallerySection from "@/components/gallery/GallerySection";

export default function GalleryPage() {

    return (
        <>
            <div
                className="flex items-center"
                style={{
                    backgroundImage: "url('/banner/bridge-banner.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex flex-col justify-center bg-secondary w-full h-full bg-opacity-90 text-center responsive-padding py-4 lg:py-8">
                    <h1 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">Our Gallery</h1>
                    <h2 className="text-md lg:text-xl font-light text-white drop-shadow-lg mt-2">
                        Discover Our Project Excellence: A Visual Journey Through Our Water Treatment Solutions.
                    </h2>
                </div>
            </div>

            <GallerySection />

        </>
    )
}