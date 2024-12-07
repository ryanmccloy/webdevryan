import FeaturesHeading from "../components/FeaturesHeading";
import WebsiteFeatures from "../components/WebsiteFeatures";

function Features() {
  return (
    <section className="px-30 pt-90 lg:pt-120 pb-30 md:gap-90 flex flex-col gap-60">
      <FeaturesHeading />
      <WebsiteFeatures />
    </section>
  );
}

export default Features;
