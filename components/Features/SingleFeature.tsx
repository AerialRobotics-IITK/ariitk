import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) => {
  const { icon, title, head, paragraph } = feature;
  const isEven = index % 2 === 0;
  return (
    <div className="w-full">
      <div
        className="wow fadeInUp flex flex-col items-center justify-center gap-8 md:flex-row"
        data-wow-delay=".15s"
      >
        <div
          className={`relative h-80 w-80 flex-shrink-0 md:h-96 md:w-96 ${
            isEven ? "md:order-1" : "md:order-2"
          }`}
        >
          <Image src={icon} alt={title} fill className="object-contain" />
        </div>
        <div
          className={`w-full max-w-lg text-center md:text-left ${
            isEven ? "md:order-2" : "md:order-1"
          }`}
        >
          <h3 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-2xl lg:text-2xl xl:text-2xl">
            {title}
          </h3>
          <h6 className="mb-2 text-xl font-bold text-black dark:text-white sm:text-xl lg:text-xl xl:text-xl">
            {head}
          </h6>
          <p className="text-base font-medium leading-relaxed text-body-color">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;