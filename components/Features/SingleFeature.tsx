import { Feature } from "@/types/feature";
import Image from "next/image";
import AnimatedImage from "../Common/AnimatedImage";

interface SingleFeatureProps {
  feature: Feature;
  index: number;
}

const SingleFeature: React.FC<SingleFeatureProps> = ({ feature, index }) => {
  const { icon, title, paragraph } = feature;
  const side = index % 2 === 0 ? "left" : "right";

  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <AnimatedImage side={side} delay={0.1 * index}>
          <div className="relative h-20 w-20 mx-auto mb-6">
            <Image
              src={icon || "/images/imav.jpg"}
              alt={title}
              fill
              className="object-contain"
              sizes="80px"
              priority={index === 0}
            />
          </div>
        </AnimatedImage>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl text-center">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color text-center">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;



