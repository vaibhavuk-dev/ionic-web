"use client";
import { useState } from "react";
import { ZoomIn, X } from "lucide-react"; // Lucide icons for better UI

const ZoomableImage = ({ src, alt = "Image", className = "" }: any) => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      {/* Image Container */}
      <div className={`relative ${className}`}>
        <img src={src} alt={alt} className="w-full cursor-pointer" />
        {/* Zoom Icon */}
        <button
          onClick={() => setZoomed(true)}
          className="absolute bottom-2 right-2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75"
        >
          <ZoomIn size={20} />
        </button>
      </div>

      {/* Zoom Modal */}
      {zoomed && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={() => setZoomed(false)} // Close when clicking outside
        >
          <div
            className="relative max-w-7xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomed(false)}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg"
            >
              <X size={24} className="text-black" />
            </button>
            <img src={src} alt={alt} className="w-full h-auto max-h-[90vh]" />
          </div>
        </div>
      )}
    </>
  );
};

export default ZoomableImage;
