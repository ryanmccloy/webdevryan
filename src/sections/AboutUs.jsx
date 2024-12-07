import AboutUsContent from "../components/AboutUsContent";

function AboutUs() {
  return (
    <div className="px-30 pt-90 lg:pt-120 pb-30 flex flex-col gap-60">
      <h2 className="text-end text-3xl uppercase md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
        Websites Built <br></br> For{" "}
        <span className="text-accent">Success</span>
      </h2>
      <AboutUsContent />
    </div>
  );
}

export default AboutUs;
