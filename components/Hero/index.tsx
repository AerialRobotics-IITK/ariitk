import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative h-screen overflow-hidden"
      >
        <video
          className="absolute left-0 top-0 z-[-1] h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/UAVs_Merge.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="container">
          <div className="flex h-screen items-center justify-center">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-4 rounded-md bg-white bg-opacity-30 p-4 text-5xl font-extrabold leading-tight text-black backdrop-blur-sm dark:text-white sm:text-4xl md:text-7xl">
                  Team Aerial Robotics IITK
                </h1>
                <p className="mb-12 rounded-md bg-white bg-opacity-30 p-4 text-xl !leading-relaxed text-black backdrop-blur-sm dark:text-white sm:text-lg md:text-2xl">
                  A group of drone enthusiasts working for a common goal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;