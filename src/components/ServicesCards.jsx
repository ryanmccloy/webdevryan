import ServiceCard from "./ServiceCard";

const services = [
  {
    heading: "Custom Website Design",
    content: "Your website should be as unique as your business.",
  },
  {
    heading: "Responsive web development",
    content: "Websites that look great and perform flawlessly on any device.",
  },
  {
    heading: "Website Performance Optimisation",
    content: "Fast websites mean happy users and better rankings.",
  },
  {
    heading: "Accessibility Optimisation",
    content: "Websites should be usable by everyone, everywhere.",
  },
  {
    heading: "Basic SEO implementation",
    content: "Helping your website get found by the right people.",
  },
  {
    heading: "Website Redesigns",
    content:
      "Transforming outdated websites into modern, user-friendly experiences.",
  },
];

function ServicesCards() {
  return (
    <div className="gap-30 mx-auto grid md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        return (
          <ServiceCard
            key={index}
            heading={service.heading}
            content={service.content}
          />
        );
      })}
    </div>
  );
}

export default ServicesCards;
