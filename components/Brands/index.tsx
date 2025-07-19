import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "@/components/Brands/brandsData";
import AnimatedImage from "@/components/Common/AnimatedImage";

const Brands: React.FC = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center bg-gray-100 px-6 py-6 dark:bg-gray-500 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[60px] 2xl:px-[80px] 2xl:py-[80px]"
              data-wow-delay=".1s"
            >
              {brandsData.map((brand, index) => (
                <SingleBrand key={brand.id} brand={brand} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

type SingleBrandProps = {
  brand: Brand;
  index: number;
};

const SingleBrand: React.FC<SingleBrandProps> = ({ brand, index }) => {
  const { href, image, name } = brand;
  const side = index % 2 === 0 ? "left" : "right";

  return (
    <AnimatedImage
      side={side}
      delay={0.1 * index}
      className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[150px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]"
    >
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-12 w-full bg-white dark:bg-gray-200 rounded-sm"
      >
        <Image src={image} alt={name} fill className="object-contain"/>
      </a>
    </AnimatedImage>
  );
};
