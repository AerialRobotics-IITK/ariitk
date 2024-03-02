import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">


            <div className="absolute right-0 top-0 w-full h-full">
              <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              >
                <source src="/images/UAVs_Merge.mp4" type="video/mp4" />
              Your browser does not support the video tag.
              </video>
            </div>
            <div
                className="relative wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                
                <h1 className="backdrop-blur-sm bg-gray-300 bg-opacity-40 mb-4 text-7xl font-extrabold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-8xl md:leading-tight">
                  Team Aerial Robotics IITK
                </h1>
                <p className="backdrop-blur-sm bg-gray-300 bg-opacity-40 mb-12 text-3xl  !leading-relaxed text-black dark:text-white sm:text-lg md:text-3xl">
                  A group of drone enthusiasts working for a common goal.
                </p>

                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <div className="relative">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/public/images/UAVs_Merge.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
