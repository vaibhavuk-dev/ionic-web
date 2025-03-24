"use client";
import React from "react";
import { Download, Mail, MessageSquare, Phone } from "lucide-react";
import Link from "next/link";

export function StickySidebar() {
  const sidebarItems = [
    {
      id: "contact",
      icon: <Phone size={24} />,
      label: "Contact Us",
      href: "#contact-form",
    },
    {
      id: "enquiry",
      icon: <MessageSquare size={24} />,
      label: "Write to Us",
      href: "#contact-form",
    },
    {
      id: "download",
      icon: <Download size={24} />,
      label: "Download Brochure",
      href: "/brochures",
    },
  ];

  return (
    <div className="fixed right-0 bottom-4 md:top-1/2 md:-translate-y-1/2 z-50">
      <div className="flex flex-col gap-2">
        {sidebarItems.map((item) => (
          <Link
            key={item.id}
            className="relative flex items-center justify-end cursor-pointer"
            href={item.href}
          >
            {/* Expandable Button */}
            <div
              className={`
                flex items-center gap-2 bg-greeng-600 hover:bg-greeng-500 text-white rounded-l-lg
                transition-all duration-300 ease-in-out
                w-12 hover:w-auto h-12 group
              `}
            >
              {/* Icon */}
              <div className="flex items-center justify-center min-w-12">
                {item.icon}
              </div>
              {/* Label */}
              <span
                className={`
                  whitespace-nowrap text-sm font-medium px-6
                  transition-all duration-300 ease
                  w-0 overflow-hidden group-hover:w-auto
                `}
              >
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default StickySidebar;
