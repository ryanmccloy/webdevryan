import Typewriter from "typewriter-effect";

function LandingHeading() {
  return (
    <h1>
      <div>
        <span className="block sm:inline-block">Professional</span>{" "}
        <span className="block sm:inline-block">Websites,</span>
      </div>
      <div>
        <span className="block sm:inline-block">Made</span>{" "}
        <span className="block text-accent sm:inline-block">
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
