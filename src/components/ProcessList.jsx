import ProcessStep from "./ProcessStep";

const process = [
  {
    heading: "Discover",
    content:
      "We'll start by discussing your goals, audience, and ideas to create a clear roadmap for your website.",
    icon: "",
  },
  {
    heading: "Design",
    content:
      "I’ll design a layout that&apos;s visually appealing and tailored to your brand, ensuring it stands out from the competition.",
    icon: "",
  },
  {
    heading: "Develop",
    content:
      "I'll code your site with responsive, user-friendly functionality, ensuring it looks and works perfectly on any device.",
    icon: "",
  },
];

function ProcessList() {
  return (
    <div className="gap-30 flex flex-col sm:w-2/3 md:w-1/2 md:gap-60">
      {process.map((step, index) => {
        return (
          <ProcessStep
            key={index}
            heading={step.heading}
            content={step.content}
          />
        );
      })}
    </div>
  );
}

export default ProcessList;
