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
                <div className="pt-12 pb-6 flex flex-col justify-center bg-secondary w-full h-full bg-opacity-90 text-center">
                    <h1 className="text-4xl font-bold text-white drop-shadow-lg">Our Gallery</h1>
                    <p className="mt-4 text-xl font-light text-white drop-shadow-lg px-32">
                        Discover Our Project Excellence: A Visual Journey Through Our Water Treatment Solutions.
                    </p>
                </div>
            </div>

            <GallerySection />

        </>
    )
}