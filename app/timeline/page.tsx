import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline",
  description: "Timeline page for team ARIITK.",
  // other metadata
  //V!g8n35h was here and if you found this, you deserve a chocolate
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Timeline"
        description="ARIITK over the years"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
