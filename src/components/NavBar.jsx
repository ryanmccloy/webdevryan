import { useEffect, useRef, useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

function NavBar() {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const menuRef = useRef();

  const iconBaseClasses =
    "absolute inset-0 transform transition-all duration-300 ";
  const liBaseClasses =
    "hover:cursor-pointer hover:font-medium transition-font duration-300 ";

  const toggleMenu = () => {
    setShowNavMenu((prev) => !prev);
  };

  const handleClickOutsideMenu = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setShowNavMenu(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") toggleMenu();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  return (
    <header className="flex items-center justify-between">
      <div>{"<I'M-RYAN/>"}</div>

      {/* Desktop Nav */}
      <nav aria-label="Main navigation" className="hidden md:block">
        <ul className="gap-30 flex">
          <li className={`${liBaseClasses}`}>Services</li>
          <li className={`${liBaseClasses}`}>Contact Us</li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <div className="relative h-5 w-5 md:hidden" ref={menuRef}>
        <div
          onClick={toggleMenu}
          className="hover:cursor-pointer"
          aria-expanded={showNavMenu}
          aria-controls="mobile-menu"
          aria-label={
            showNavMenu ? "Close navigation menu" : "Open navigation menu"
          }
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {/* Hamburger Menu */}
          <RxHamburgerMenu
            size={20}
            className={`${iconBaseClasses} ${
              showNavMenu ? "scale-75 opacity-0" : "scale-100 opacity-100"
            } `}
          />

          {/* Cross Icon */}
          <RxCross1
            size={20}
            className={`${iconBaseClasses} ${
              showNavMenu ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
          />
        </div>

        <nav aria-label="Main navigation">
          <ul
            className={`gap-15 top-30 absolute right-0 z-10 flex flex-col items-end whitespace-nowrap transition-all duration-300 ${showNavMenu ? "translate-x-0" : "translate-x-[200px]"} `}
            id="mobile-menu"
          >
            <li className={`${liBaseClasses}`}>Services</li>
            <li className={`${liBaseClasses}`}>Contact Us</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
