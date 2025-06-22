"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const Footer = () => {
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
              className="w-6 h-10 flex items-center justify-center text-body-color duration-300 hover:text-[#0A66C2] dark:text-body-color-dark dark:hover:text-[#0A66C2]"
            >
              <svg width="28" height="28" viewBox="0 0 17 16" className="fill-current" >
                <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
              </svg>
            </a>

            {/*insta*/}
            <a href="https://www.instagram.com/ar.iitk/" target="_bank" aria-label="Instagram"
              className="w-6 h-10 flex items-center justify-center text-body-color duration-300 hover:text-[#C13584] dark:text-body-color-dark dark:hover:text-[#C13584]"
            >
              <svg width="20" height="20" viewBox="0 0 16 16" className="fill-current">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>

            {/*github*/}
            <a href="https://github.com/AerialRobotics-IITK" target="_blank" aria-label="GitHub"
              className="w-6 h-10 flex items-center justify-center text-body-color duration-300 hover:text-black dark:text-body-color-dark dark:hover:text-white"
            >
              <svg width="22" height="22" viewBox="0 0 16 16" className="fill-current" >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>

            {/*youtube*/}
            <a href="https://www.youtube.com/@aerialroboticsiitkanpur7921/featured" target="_blank"  aria-label="YouTube"
              className="w-6 h-10 flex items-center justify-center text-body-color duration-300 hover:text-[#FF0000] dark:text-body-color-dark dark:hover:text-[#FF0000]"
            >
              <svg width="28" height="28" viewBox="0 0 18 14" className="fill-current" >
                <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
              </svg>
            </a>

            {/*facebook*/}
            <a href="https://www.facebook.com/ariitk/" target="_bank" aria-label="Facebook"
              className="w-4 h-10 flex items-center justify-center text-body-color duration-300 hover:text-[#1877F2] dark:text-body-color-dark dark:hover:text-[#1877F2]"
            >
              <svg width="20" height="20" viewBox="0 0 9 18" className="fill-current" >
                <path d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z" />
              </svg>
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