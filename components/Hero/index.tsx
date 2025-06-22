import Link from "next/link";
import Image from "next/image";
import AnimatedImage from "@/components/Common/AnimatedImage";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white dark:bg-gray-dark min-h-screen flex items-center justify-center"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          className="min-w-full min-h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/UAVs_Merge.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-3xl flex flex-col items-center justify-center">
          <h1 className="mb-4 px-4 py-2 text-5xl sm:text-6xl md:text-7xl font-extrabold text-white text-center rounded bg-gray-900 bg-opacity-40">
            Team Aerial <br /> Robotics IITK
          </h1>
          <p className="mb-8 px-4 py-2 text-lg sm:text-2xl md:text-3xl font-medium text-white text-center rounded bg-gray-900 bg-opacity-40">
            A group of drone enthusiasts working for a common goal.
          </p>
          {/* Example animated image (optional, remove if not needed) */}
          {/* <AnimatedImage side="right" delay={0.2}>
            <Image
              src="/images/drone.png"
              alt="Aerial Robotics Drone"
              width={400}
              height={400}
              className="rounded-2xl shadow-xl"
              priority
            />
          </AnimatedImage> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;




