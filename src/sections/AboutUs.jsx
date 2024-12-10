import AboutUsHeading from "../components/AboutUsHeading";
import AboutUsContent from "../components/AboutUsContent";

function AboutUs() {
  return (
    <section className="section-spacing" aria-labelledby="about-us-heading">
      <AboutUsHeading />
      <AboutUsContent />
    </section>
  );
}

export default AboutUs;
