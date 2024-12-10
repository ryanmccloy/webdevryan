function ProcessStep({ heading, content, icon }) {
  return (
    <div className="flex gap-30">
      <div aria-hidden="true">{icon}</div>
      <div className="flex flex-col gap-15 md:gap-30">
        <h3>{heading}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default ProcessStep;
