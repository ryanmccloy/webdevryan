function ProcessStep({ heading, content, icon }) {
  return (
    <div className="flex gap-30">
      <div aria-hidden="true">{icon}</div>
      <div className="flex flex-col gap-15 md:gap-30">
        <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          {heading}
        </h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default ProcessStep;
