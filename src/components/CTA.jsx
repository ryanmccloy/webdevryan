import LandingHeading from "./LandingHeading";
import GetInTouchButton from "./GetInTouchButton";

function CTA() {
  const scrollToContactUs = () => {
    const contactUsSection = document.getElementById("contact-us");

    if (contactUsSection) {
      contactUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="leading-14 mt-90 flex flex-col gap-30 leading-normal md:mt-150">
      <LandingHeading />
      <GetInTouchButton label="Contact Us" onClick={scrollToContactUs}>
        Get In Touch
      </GetInTouchButton>
    </div>
  );
}

export default CTA;
