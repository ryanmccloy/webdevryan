import { useRef } from "react";

function Principle({ heading, subHeading, num, content, isActive, onToggle }) {
  const contentRef = useRef(null); // Ref to measure the content's height

  return (
    <div
      className="flex cursor-pointer flex-col gap-15 border-b border-primary md:gap-30"
      onClick={onToggle}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      aria-controls={`content-${num}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onToggle();
      }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          {heading}
        </h3>
        <div className="pl-15 sm:pl-30">{num}</div>
      </div>

      {/* Content Wrapper */}
      <div
        ref={contentRef}
        id={`content-${num}`}
        role="region"
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isActive ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        }`}
        style={{
          maxHeight: isActive ? `${contentRef.current?.scrollHeight}px` : "0",
        }}
      >
        <div className="flex flex-col gap-15 pb-15 md:pb-30">
          <h5>{subHeading}</h5>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Principle;
