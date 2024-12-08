import { useRef } from "react";

function Principle({ heading, num, content, isActive, onToggle }) {
  const contentRef = useRef(null); // Ref to measure the content's height

  return (
    <div
      className="gap-15 md:gap-30 flex cursor-pointer flex-col border-b border-primary"
      onClick={onToggle}
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
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isActive ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        }`}
        style={{
          maxHeight: isActive ? `${contentRef.current?.scrollHeight}px` : "0",
        }}
      >
        <div className="pb-15 md:pb-30">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Principle;
