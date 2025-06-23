"use client";
import React, {useState} from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaYoutube, FaFacebookF } from "react-icons/fa";
import { useTheme } from "next-themes";

const Footer = () => {
  const [hovered, setHovered] = useState(false);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <footer className="relative z-10 text-gray-800 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 pt-16 pb-6 md:pt-20 lg:pt-24 ">

      <div className="container mx-auto px-20">
        <div className="flex flex-wrap justify-between items-start gap-y-12">

          {/* Left: goal and since*/}
          <div className="w-full px-4 md:w-1/2 lg:w-3/8">
            <h1 className="mb-2 text-3xl font-extrabold">
              ARIITK
            </h1>
            <p className="mb-10 text-base leading-relaxed">
              We are a student led team at IIT Kanpur, supported by our college.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              <span className="font-semibold text-base text-primary">Mission: </span>
              To advance UAV technology and promote its real-world utility through open-source, autonomous solutions.
            </p>
            <p className="mb-6 text-base">
              <span className="font-semibold text-base text-primary">Since 2018: </span>
              Our passionate team at IIT Kanpur has tackled real-life challenges, winning accolades and building a vibrant UAV community.
            </p>
          </div>

          {/* Right: Contact & Map */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <h2 className="mb-4 text-2xl font-bold">
              Reach us at
            </h2>
            <div className="flex justify-left mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1785.1470967064415!2d80.22877127232319!3d26.510661199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c36ffac6f195f%3A0x21cbfa3e6d7fb5e9!2sHall%20of%20Residence%20II%2C%20Sixth%20Ave%2C%20Nankari%2C%20Kalyanpur%2C%20Kanpur%2C%20Uttar%20Pradesh%20208016!5e0!3m2!1sen!2sin!4v1673700874882!5m2!1sen!2sin"
                className="w-64 h-44 md:w-80 md:h-30 rounded-lg"
                loading="lazy"
                title="ARIITK Location"
              ></iframe>
            </div>
            <div className="mb-8 text-sm flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15.5 11.06a2.5 2.5 0 1 1-3.44-3.44 2.5 2.5 0 0 1 3.44 3.44z"></path>
                <path d="M12 21c-4.97-4.29-8-7.36-8-11A8 8 0 0 1 20 10c0 3.64-3.03 6.71-8 11z"></path>
               </svg>
              <span>Hall 2, IIT Kanpur, UP - 208016</span>
            </div>
          </div>

        </div>

        {/*footy social links bozo*/}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-6">
            {/*linkedin*/}
            <a href="https://www.linkedin.com/company/aerial-robotics-iitk/" target="_blank" aria-label="LinkedIn"
              className="text-2xl flex items-center justify-center text-body-color duration-300 hover:text-[#0A66C2] dark:text-body-color-dark dark:hover:text-[#2774c2]"
            >
              <FaLinkedin />
            </a>

            {/* insta without gradient
            <a href="https://www.instagram.com/ar.iitk/" target="_bank" aria-label="Instagram"
              className="text-2xl flex items-center justify-center text-body-color duration-300 hover:text-[#C13584] dark:text-body-color-dark dark:hover:text-[#C13584]"
            >
              <FaInstagram />
            </a> */}

            {/*insta gradient*/}
            <svg width="0" height="0" className="absolute">
              <defs>
                <linearGradient id="insta-gradient" x1="0%" y1="115%" x2="-20%" y2="10%">
                  <stop stopColor="#feda77" offset="0%" />
                  <stop stopColor="#f58529" offset="17%" />
                  <stop stopColor="#dd2a7b" offset="50%" />
                  <stop stopColor="#8134af" offset="80%" />
                  <stop stopColor="#515bd4" offset="100%" />
                </linearGradient>
              </defs>
            </svg>
            <a href="https://www.instagram.com/ar.iitk/" target="_blank" rel="noopener noreferrer"
              className="duration-300 text-2xl"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <FaInstagram
                style={{
                  fill: hovered
                    ? "url(#insta-gradient)"
                    : isDarkMode
                    ? "#959CB1"  // body-color-dark
                    : "#788293", // body-color
                  transition: "fill 0.3s ease",
                }}
              />
            </a>

            {/*github*/}
            <a href="https://github.com/AerialRobotics-IITK" target="_blank" aria-label="GitHub"
              className="text-2xl flex items-center justify-center text-body-color duration-300 hover:text-black dark:text-body-color-dark dark:hover:text-white"
            >
              <FaGithub />
            </a>

            {/*youtube*/}
            <a href="https://www.youtube.com/@aerialroboticsiitkanpur7921/featured" target="_blank"  aria-label="YouTube"
              className="text-2xl flex items-center justify-center text-body-color duration-300 hover:text-[#FF3333] dark:text-body-color-dark dark:hover:text-[#FF3333]"
            >
              <FaYoutube />
            </a>

            {/*facebook*/}
            <a href="https://www.facebook.com/ariitk/" target="_bank" aria-label="Facebook"
              className="text-xl flex items-center justify-center text-body-color duration-300 hover:text-[#1877F2] dark:text-body-color-dark dark:hover:text-[#2e84f2]"
            >
              <FaFacebookF />
            </a>
            
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent my-4"></div>
        <div className="text-center text-sm text-body-color dark:text-body-color-dark">
          {"\u00A9"} {new Date().getFullYear()} ARIITK, IIT Kanpur | All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;