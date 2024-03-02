import { Feature } from "@/types/feature";
import Image from "next/image";
import Link from "next/link";
{
  /* <Image src="/public/images/testimonials/auth-01.png" alt="icon" fill />; */
}
const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        {/* <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md"> */}
        {/* #create an image with width less than the paragraph width and accordingly height and source as the text given by icon */}
        <div>
          <Image
            src="/public/images/imav.jpg"
            alt="icon"
            fill
          />
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
