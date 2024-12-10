import { IoArrowForwardOutline } from "react-icons/io5";

function GetInTouchButton({
  onClick,
  type = "button",
  label = "Get In Touch",
  children,
}) {
  return (
    <button
      aria-label={label}
      type={type}
      onClick={onClick}
      className="flex w-fit items-center gap-15 rounded-custom bg-accent p-15 text-base font-medium uppercase shadow-sm transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
    >
      <span>{children}</span>
      <IoArrowForwardOutline className="text-[20px]" />
    </button>
  );
}

export default GetInTouchButton;
