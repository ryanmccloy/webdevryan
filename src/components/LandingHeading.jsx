import Typewriter from "typewriter-effect";

function LandingHeading() {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
      <div>
        <span className="block sm:inline-block">Professional</span>
        <span className="block sm:ml-3 sm:inline-block">Websites,</span>
      </div>
      <div>
        <span className="block sm:inline-block">Made</span>
        <span className="block text-accent sm:ml-3 sm:inline-block">
          <Typewriter
            options={{
              strings: [
                "Simple",
                "Responsive",
                "Accessible",
                "Fast",
                "Scalable",
              ],
              autoStart: true,
              loop: true,
              cursor: "_",
            }}
          />
        </span>
      </div>
    </h1>
  );
}

export default LandingHeading;
