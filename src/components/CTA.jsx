import LandingHeading from "./LandingHeading";
import GetInTouchButton from "./GetInTouchButton";

function CTA() {
  return (
    <div className="leading-14 mt-90 gap-30 md:mt-150 flex flex-col leading-normal">
      <LandingHeading />
      <GetInTouchButton />
    </div>
  );
}

export default CTA;
