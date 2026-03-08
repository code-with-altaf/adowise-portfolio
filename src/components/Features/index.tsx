import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = ({ messages }: { messages: any }) => {
  const t = messages.Features;
  return (
    <>
      <section id="features" className="pt-20 mt-20 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title={t.title}
            paragraph={t.subtitle}
            center
          />

          <div className="grid grid-cols-1 pt-8 gap-x-8 gap-y-3 md:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} messages={messages} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
