function ServiceCard({ heading, content }) {
  return (
    <div className="p-15 md:p-30 rounded-custom gap-15 md:gap-30 flex max-w-[400px] flex-col justify-between bg-white shadow-sm">
      <div className="h-[50px] w-[50px] bg-green-300"></div>
      <div className="gap-15 md:gap-30 flex flex-col">
        <h4 className="uppercase">{heading}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
