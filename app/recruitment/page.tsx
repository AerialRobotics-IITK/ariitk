import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us | AR-IITK",
  description: "Recruitment page for AR-IITK",
  // other metadata
  //V!g8n35h was here and if you found this, you deserve a chocolate
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Y23 Recruitments are about to begin!"
        description="Have any question or suggestions? Wait for the recruitment drive to begin, hang around, check out the site a bit, resources for the recruitment drive will be uploaded soon. "
      />

      {/* <Contact /> */}
    </>
  );
};

export default ContactPage;
