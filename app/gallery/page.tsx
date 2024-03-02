import Breadcrumb from "@/components/Common/Breadcrumb";
import Gallery from "@/components/Gallery";
import Loader from "@/components/Loader";
import { Metadata } from "next";

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
