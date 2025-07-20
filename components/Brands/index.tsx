import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "@/components/Brands/brandsData";

const Brands = () => {
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
                <SingleBrand key={brand.id} brand={brand}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;
  return (
    <div className="mx-3 flex w-full max-w-[200px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[180px] xl:mx-6 xl:max-w-[180px] 2xl:mx-8 2xl:max-w-[200px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-16 w-full bg-white dark:bg-gray-200 transition duration-500ms hover:scale-105 rounded-sm"
      >
        <Image src={image} alt={name} fill className="object-contain"/>
      </a>
    </div>
  );
};
