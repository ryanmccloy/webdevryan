import { IoArrowForwardOutline } from "react-icons/io5";

function GetInTouchButton() {
  return (
    <button className="rounded-custom gap-15 flex w-fit items-center bg-accent p-10 text-base font-medium uppercase shadow-sm">
      <span>Get In touch</span>
      <IoArrowForwardOutline className="text-[20px]" />
    </button>
  );
}

export default GetInTouchButton;
