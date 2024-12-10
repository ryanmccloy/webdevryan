function ServiceCard({ heading, content, icon }) {
  return (
    <div className="flex max-w-[400px] flex-col justify-between gap-15 rounded-custom bg-white p-15 shadow-sm md:gap-30 md:p-30">
      <div>{icon}</div>
      <div className="flex flex-col gap-15 md:gap-30">
        <h4 className="uppercase">{heading}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
