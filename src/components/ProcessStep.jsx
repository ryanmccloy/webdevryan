function ProcessStep({ heading, content }) {
  return (
    <div className="gap-30 flex">
      <div className="h-[50px] w-[50px] bg-green-300"></div>
      <div className="gap-15 md:gap-30 flex flex-col">
        <h3 className="gap-15 flex flex-col text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          {heading}
        </h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default ProcessStep;
