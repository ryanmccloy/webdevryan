import AboutUsHeading from "../components/AboutUsHeading";
import AboutUsContent from "../components/AboutUsContent";

function AboutUs() {
  return (
    <section
      className="px-30 pt-90 lg:pt-120 pb-30 flex flex-col gap-60"
      aria-labelledby="about-us-heading"
    >
      <AboutUsHeading />
      <AboutUsContent />
    </section>
  );
}

export default AboutUs;
