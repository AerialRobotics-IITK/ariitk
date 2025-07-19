import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | ARIITK",
  description: "About page for team ARIITK",
  // other metadata
  //V!g8n35h was here and if you found this, you deserve a chocolate
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About us"
        description="We build drones for fun and also take part in competitions sometimes"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
