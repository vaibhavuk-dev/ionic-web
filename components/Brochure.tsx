"use client"

import React from "react";
import NavBar from "./NavBar";
import { useState } from "react";
// import PopupForm from "./PopupForm";

export default function Brochure() {
  const [isPopupOpen, setPopupOpen] = useState(true);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div id="blogs" className="flex flex-col bg-blueb-50 relative">
      

      <div className="p-10">
        <h1 className="pt-20 font-bold text-blueb-700 text-4xl">Brochures</h1>

        <div
          onClick={openPopup}
          className="w-1/4 hover:scale-110 transform transition-transform cursor-pointer"
        >
          <img src="/brochure.jpg" className="pt-10 rounded-lg" />
          <p className="pt-3 text-center font-semiBold">
            Zero Liquid Discharge
          </p>
        </div>
      </div>
      {/* {isPopupOpen && <PopupForm onClose={closePopup} />} */}
    </div>
  );
}

