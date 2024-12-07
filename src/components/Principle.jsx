import { useState } from "react";

function Principle({ heading, num }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div
      className={`pb-15 md:pb-30 flex cursor-pointer items-center justify-between border-b border-primary ${isActive ? "bg-pink-100" : ""}`}
      onClick={handleClick}
    >
      <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
        {heading}
      </h3>
      <div className="pl-15 sm:pl-30">{num}</div>
    </div>
  );
}

export default Principle;
