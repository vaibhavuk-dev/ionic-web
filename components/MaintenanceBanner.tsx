"use client" 
import { useEffect, useState } from 'react';

const MaintenanceBanner = () => {
  const message = "Website Under Maintenance - Our website is currently undergoing maintenance, which may cause slower loading times. We apologize for any inconvenience this may cause and appreciate your patience as we work to improve your online experience. Thank you for your understanding!";

  return (
    <div className="w-full bg-yellow-500 overflow-hidden z-50">
      <div className="h-8 flex items-center overflow-hidden relative">
        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(10%); }
            100% { transform: translateX(-100%); }
          }
          .scrolling-text {
            animation: scroll 60s linear infinite;
            white-space: nowrap;
          }
        `}</style>
        
        <div className="scrolling-text text-black font-medium">
          <span className="mx-4">{message}</span>
          <span className="mx-4">{message}</span>
          <span className="mx-4">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceBanner;