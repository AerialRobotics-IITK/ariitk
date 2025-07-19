import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | ARIITK",
  description: "Contact page for team AR-IITK.",
  // other metadata
  //V!g8n35h was here and if you found this, you deserve a chocolate
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Have any question or suggestions? Feel free to contact the team."
      />
      
      <Contact />
    </>
  );
};

export default ContactPage;
