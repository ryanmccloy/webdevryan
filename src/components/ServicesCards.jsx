import {
  PiLayoutThin,
  PiMagnifyingGlassThin,
  PiPersonSimpleWalkThin,
  PiRepeatThin,
  PiResizeThin,
  PiSpeedometerThin,
} from "react-icons/pi";
import ServiceCard from "./ServiceCard";

const iconBaseStyles = " text-5xl text-accent md:text-6xl lg:text-7xl";

const services = [
  {
    heading: "Custom Website Design",
    content: "Your website should be as unique as your business.",
    icon: <PiLayoutThin className={iconBaseStyles} />,
  },
  {
    heading: "Responsive web development",
    content: "Websites that look great and perform flawlessly on any device.",
    icon: <PiResizeThin className={iconBaseStyles} />,
  },
  {
    heading: "Website Performance Optimisation",
    content: "Fast websites mean happy users and better rankings.",
    icon: <PiSpeedometerThin className={iconBaseStyles} />,
  },
  {
    heading: "Accessibility Optimisation",
    content: "Websites should be usable by everyone, everywhere.",
    icon: <PiPersonSimpleWalkThin className={iconBaseStyles} />,
  },
  {
    heading: "Basic SEO implementation",
    content: "Helping your website get found by the right people.",
    icon: <PiMagnifyingGlassThin className={iconBaseStyles} />,
  },
  {
    heading: "Website Redesigns",
    content:
      "Transforming outdated websites into modern, user-friendly experiences.",
    icon: <PiRepeatThin className={iconBaseStyles} />,
  },
];

function ServicesCards() {
  return (
    <div className="mx-auto grid gap-30 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        return (
          <ServiceCard
            key={index}
            heading={service.heading}
            content={service.content}
            icon={service.icon}
          />
        );
      })}
    </div>
  );
}

export default ServicesCards;
