import React from "react";
import Image from "next/image";
import AnimatedImage from "../Common/AnimatedImage";

const AboutSectionTwo: React.FC = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Animated image on the left */}
          <div className="w-full px-4 lg:w-1/2">
            <AnimatedImage
              side="left"
              delay={0.2}
              className="relative mx-auto mb-12 aspect-[32/24] max-w-[550px] text-center lg:m-0"
            >
              <Image
                src="/images/icuas25.jpeg"
                alt="icuas 2025 winners"
                fill
                className="dark:hidden"
              />
              <Image
                src="/images/icuas25.jpeg"
                alt="icuas 2025 winners"
                fill
                className="hidden dark:block"
              />
            </AnimatedImage>
          </div>
          {/* Description on the right */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  🥇 ICUAS
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  International Conference on Unmanned Aircraft Systems
                  <br />First position at ICUAS 2025 - Charlotte, NC, USA.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  InterIIT Techmeet
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Podium finish streak of five years, with the team winning the
                  event in 2019.
                </p>
              </div>
              <div className="mb-0">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  IMAV
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  International Micro Air Vehicles, Conferences and Competitions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;


