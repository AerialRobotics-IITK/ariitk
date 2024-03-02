import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactCopy from "@/components/Contactcopy";

import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Contact",
//   description: "Contact page for team AR-IITK.",
//   // other metadata
//   //V!g8n35h was here and if you found this, you deserve a chocolate
// };

const ContactPageCopy = () => {
  return (
    <>
      <Breadcrumb
        pageName="Meet the Team"
        description="Get in touch with us. We are always here to help you."
      />

      <ContactCopy />
    </>
  );
};

export default ContactPageCopy;
