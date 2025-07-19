import Breadcrumb from "@/components/Common/Breadcrumb";
import Gallery from "@/components/Gallery";
import Loader from "@/components/Loader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | ARIITK",
  description: "Media gallery for team ARIITK",
  // other metadata
  //V!g8n35h was here and if you found this, you deserve a chocolate
};

const GalleryPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Gallery"
        description="Some of the best moments captured by our team members. Check out our gallery to know more about us"
      />
      <Gallery />
    </>
  );
};

export default GalleryPage;
