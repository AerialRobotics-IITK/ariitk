"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const Footer = () => {
  // Dropdown state
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <footer className="relative z-10 bg-gray-800 pt-16 pb-6 md:pt-20 lg:pt-24 text-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start gap-y-12">
          {/* Left: Info & Team Photo */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white">
              ARIITK
            </h1>
            <p className="mb-4 text-base leading-relaxed text-gray-200">
              <span className="font-semibold text-blue-400">Mission:</span> To advance UAV technology and promote its real-world utility through open-source, autonomous solutions.
            </p>
            <p className="mb-6 text-sm text-gray-400">
              <span className="font-semibold text-blue-400">Since 2018:</span> Our passionate team at IIT Kanpur has tackled real-life challenges, winning accolades and building a vibrant UAV community.
            </p>
            {/* Larger Team Photo */}
            <div className="mb-6">
              <img
                src="/images/team/current/teamphoto.jpg"
                alt="ARIITK Team"
                className="rounded-lg shadow-lg w-72 h-44 object-cover"
              />
            </div>
          </div>

          {/* Right: Contact & Map */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <h2 className="mb-6 text-xl font-bold text-white">
              Reach Out to Our HQ
            </h2>
            <div className="mb-4 flex items-center gap-2 text-gray-200">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M16.72 11.06a2.5 2.5 0 1 1-3.44-3.44 2.5 2.5 0 0 1 3.44 3.44z"></path>
                <path d="M12 21c-4.97-4.29-8-7.36-8-11A8 8 0 0 1 20 10c0 3.64-3.03 6.71-8 11z"></path>
              </svg>
              <span>
                Hall of Residence II, IIT Kanpur, UP 208016
              </span>
            </div>
            <div className="mb-4 flex items-center gap-2 text-gray-200">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M16 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8z"></path>
              </svg>
              <a href="mailto:aerial_snt@iitk.ac.in" className="hover:text-blue-400">aerial_snt@iitk.ac.in</a>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1785.1470967064415!2d80.22877127232319!3d26.510661199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c36ffac6f195f%3A0x21cbfa3e6d7fb5e9!2sHall%20of%20Residence%20II%2C%20Sixth%20Ave%2C%20Nankari%2C%20Kalyanpur%2C%20Kanpur%2C%20Uttar%20Pradesh%20208016!5e0!3m2!1sen!2sin!4v1673700874882!5m2!1sen!2sin"
                width="100%"
                height="180"
                loading="lazy"
                title="ARIITK Location"
              ></iframe>
            </div>
            {/* Contact Us Button */}
            <div className="flex justify-center">
              <a
                href="/contact"
                className="inline-block rounded-full bg-blue-600 px-8 py-3 text-white font-semibold shadow hover:bg-blue-700 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Social Links at the bottom */}
        <div className="flex justify-center gap-8 mt-12 mb-4">
          <a href="https://github.com/AerialRobotics-IITK" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <svg className="w-8 h-8 text-gray-100 hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.57 2.36 1.12 2.94.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.15-4.56-5.13 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.74 0 0 .84-.28 2.75 1.05A9.37 9.37 0 0112 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.43.2 2.48.1 2.74.64.72 1.03 1.64 1.03 2.77 0 4-2.34 4.87-4.57 5.13.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.57.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" />
            </svg>
          </a>
          <a href="https://facebook.com/ariitk" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <svg className="w-8 h-8 text-gray-100 hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24h-1.918c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0"/>
            </svg>
          </a>
          <a href="mailto:aerial_snt@iitk.ac.in" aria-label="Email">
            <svg className="w-8 h-8 text-gray-100 hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.99 7.99c.39.39 1.02.39 1.41 0L20 10.01V20H4z"/>
            </svg>
          </a>
          <a href="https://www.youtube.com/@aerialroboticsiitkanpur7921" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <svg className="w-8 h-8 text-gray-100 hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.8 8.001s-.2-1.43-.8-2.06c-.77-.8-1.64-.8-2.04-.85C16.23 5 12 5 12 5h-.01s-4.23 0-6.96.09c-.4.05-1.27.05-2.04.85-.6.63-.8 2.06-.8 2.06S2 9.57 2 11.13v1.74c0 1.56.2 3.13.2 3.13s.2 1.43.8 2.06c.77.8 1.78.77 2.23.86C7.77 19 12 19 12 19s4.23 0 6.96-.09c.45-.09 1.46-.06 2.23-.86.6-.63.8-2.06.8-2.06s.2-1.57.2-3.13v-1.74c0-1.56-.2-3.13-.2-3.13zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z"/>
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-700 to-transparent my-4"></div>
        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} ARIITK, IIT Kanpur. All rights reserved. &nbsp;
          <a href="/terms" className="hover:text-blue-400">Terms of Service</a> &nbsp;
          <a href="/privacy" className="hover:text-blue-400">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


        


