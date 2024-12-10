import {
  PiCodeSimpleThin,
  PiLightbulbThin,
  PiPaintRollerThin,
} from "react-icons/pi";
import ProcessStep from "./ProcessStep";

const iconBaseStyles = " text-5xl text-accent md:text-6xl lg:text-7xl";

const process = [
  {
    heading: "Discover",
    content:
      "We'll start by discussing your goals, audience, and ideas to create a clear roadmap for your website.",
    icon: <PiLightbulbThin className={iconBaseStyles} />,
  },
  {
    heading: "Design",
    content:
      "I’ll design a layout that&apos;s visually appealing and tailored to your brand, ensuring it stands out from the competition.",
    icon: <PiPaintRollerThin className={`-mt-1 md:-mt-2 ${iconBaseStyles} `} />,
  },
  {
    heading: "Develop",
    content:
      "I'll code your site with responsive, user-friendly functionality, ensuring it looks and works perfectly on any device.",
    icon: <PiCodeSimpleThin className={`-mt-1 md:-mt-2 ${iconBaseStyles} `} />,
  },
];

function ProcessList() {
  return (
    <div className="flex flex-col gap-30 sm:w-2/3 md:w-1/2 md:gap-60">
      {process.map((step, index) => {
        return (
          <ProcessStep
            key={index}
            heading={step.heading}
            content={step.content}
            icon={step.icon}
          />
        );
      })}
    </div>
  );
}

export default ProcessList;
