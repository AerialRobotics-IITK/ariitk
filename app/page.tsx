import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
// import Video from "@/components/Video";
import ContactCopy from "@/components/Contactcopy";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

// export const metadata: Metadata = {
//   title: "ARIITK",
//   description: "This is Home for ARIITK official website",
//   // other metadata
// };

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}

      <AboutSectionOne />
      <AboutSectionTwo />
      {/* to do: add words from alums into testimonials */}
      {/* <Testimonials /> */}
      {/* <ContactCopy /> */}
      {/* <Pricing /> */}
      <Blog />
      <Brands />
      <Analytics/>
      <SpeedInsights/>
      {/* <Contact /> */}
    </>
  );
}
