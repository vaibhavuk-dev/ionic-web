"use client"

import React, { useState } from "react";
import emailjs from "emailjs-com";

const PopupForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_tzhwo5j",
        "template_g95cv5f",
        { name, email },
        "XqqozqSBEwcW7fl1z"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          onClose();
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="absolute flex items-center justify-center z-30 h-screen w-screen bg-white bg-opacity-60">
      <div className="popup-form z-30 items-center bg-blue-200 w-fit rounded-xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-5 w-fit"
        >

          <label className="font-medium">
            Name
          </label>
          <input
            className="px-3 py-2 mt-1 rounded outline-none"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="font-medium mt-5">
            Email
          </label>
          <input
            className="px-3 py-2 mt-1 rounded outline-none"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="mt-5 p-2 bg-blueb-700 rounded text-white font-semibold hover:bg-opacity-75" type="submit">Submit</button>
          <button className="mt-5 p-2 bg-white-300" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
