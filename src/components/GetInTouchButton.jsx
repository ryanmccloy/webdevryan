import { IoArrowForwardOutline } from "react-icons/io5";

function GetInTouchButton() {
  return (
    <button
      aria-label="Get in touch with us"
      className="rounded-custom gap-15 flex w-fit items-center bg-accent p-10 text-base font-medium uppercase shadow-sm transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
    >
      <span>Get In touch</span>
      <IoArrowForwardOutline className="text-[20px]" />
    </button>
  );
}

export default GetInTouchButton;
