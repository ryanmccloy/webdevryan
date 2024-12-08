import ServicesCards from "../components/ServicesCards";
import ServicesHeadingAndParagraph from "../components/ServicesHeadingAndParagraph";

function Services() {
  return (
    <section className="px-30 pt-90 lg:pt-120 pb-30 md:gap-90 flex flex-col gap-60">
      <ServicesHeadingAndParagraph />
      <ServicesCards />
    </section>
  );
}

export default Services;
