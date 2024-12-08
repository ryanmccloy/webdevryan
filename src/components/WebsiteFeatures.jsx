import { useState } from "react";
import Principle from "./Principle";

const principles = [
  {
    num: "01",
    heading: "Responsive Design",
    subHeading: "Optimized for Every Device",
    content:
      "Your website should look stunning and function seamlessly on any screen size. I specialize in creating responsive designs that adapt flawlessly to desktops, tablets, and mobile devices, ensuring your audience has a consistent experience no matter how they access your site.",
  },
  {
    num: "02",
    heading: "Accessible for Everyone",
    subHeading: "Inclusive and User-Friendly",
    content:
      "Accessibility is more than a requirement—it's a commitment to inclusivity. I ensure your website is designed to be usable by everyone, including individuals with disabilities, by following the latest accessibility standards and best practices.",
  },
  {
    num: "03",
    heading: "Fast and Optimized",
    subHeading: "Speed That Converts",
    content:
      "Slow websites lose visitors. I focus on building lightweight and optimized websites that load quickly and deliver smooth performance, helping you retain users and improve your search engine rankings.",
  },
  {
    num: "04",
    heading: "Scalable and Future-Ready",
    subHeading: "Built to Grow With You",
    content:
      "Your website should evolve with your business. I design scalable solutions that can handle increased traffic, new features, and future growth, ensuring your site remains an asset as your needs expand.",
  },
  {
    num: "05",
    heading: "Custom-Tailored Solutions",
    subHeading: "Made for Your Unique Needs",
    content:
      "No two businesses are the same, so your website shouldn’t be either. I craft custom solutions that align with your vision, brand identity, and goals, ensuring a site that is as unique as your business.",
  },
];

function WebsiteFeatures() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="gap-15 md:gap-30 flex flex-col sm:w-2/3 sm:self-end md:w-1/2">
      {principles.map((principle, index) => {
        return (
          <Principle
            key={index}
            heading={principle.heading}
            num={principle.num}
            content={principle.content}
            isActive={activeIndex === index}
            onToggle={() => handleToggle(index)}
          />
        );
      })}
    </div>
  );
}

export default WebsiteFeatures;
