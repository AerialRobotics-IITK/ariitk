import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle title="Awards and Recognition" paragraph="" center />
          <div className="flex flex-col">
            {featuresData.map((feature, index) => (
              <SingleFeature
                key={feature.id}
                feature={feature}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;