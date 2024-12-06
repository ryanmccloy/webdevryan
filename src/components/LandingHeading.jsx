import Typewriter from "typewriter-effect";

function LandingHeading() {
  return (
    <h1>
      <span className="block">Professional</span>
      <span className="block">Websites,</span>
      <span className="block">Made</span>
      <span className="block text-accent">
        <Typewriter
          options={{
            strings: ["Simple", "Responsive", "Accessible", "Fast", "Scalable"],
            autoStart: true,
            loop: true,
            cursor: "_",
          }}
        />
      </span>
    </h1>
  );
}

export default LandingHeading;
