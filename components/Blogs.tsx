import React from "react";

export default function Blogs() {
  const blogs = [
    {
      title:
        "Mastering Water Treatment: A Glimpse into Ionic's 35-Year Journey",
      desc: "Discover the rich history and expertise of Ionic Engineering Technology Pvt. Ltd., a distinguished ISO-9001/2015 certified company with over 35 years of commitment to excellence in water and wastewater treatment.",
    },
    {
      title: "Leadership Insights: The Visionaries Behind Ionic Engineering",
      desc: "Meet the dynamic leaders driving Ionic's success - Mr. K V Raman, the founder, and Mrs. Lalitha Iyer, the director. Learn about their vision and dedication that has shaped Ionic into a reliable one-stop-shop for integrated water solutions.",
    },
    {
      title: "14 Years of Excellence: Unveiling Ionic's Technological Triumphs",
      desc: "Delve into Ionic's 14-year journey focused on technology, quality, and performance. Explore how their commitment to Remove Everything from Water – Except Hydrogen & Oxygen sets them apart, ensuring customer peace of mind.",
    },
    {
      title: "Water Efficiency Matters: Ionic's Approach to Sustainability",
      desc: "Discover why water efficiency is at the core of Ionic's mission. Learn how they address water scarcity challenges by providing innovative solutions to reduce industries' water footprint, emphasizing techno-economical value engineering for a sustainable future.",
    },
  ];

  return (
    <div id="blogs" className="p-10 bg-bgLogoBlue relative">
      <h1 className="font-bold text-logoBlue text-4xl">Blogs</h1>

      <div className="grid grid-cols-4 cursor-pointer">
        {blogs.map((blog) => (
          <div className="pt-5 pe-10">
            <img src="/machine.jpg" alt="" />
            <p className="pt-5 font-semibold text-lg text-logoBlue">{blog.title}</p>
            <p className="pt-2 truncate">{blog.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
