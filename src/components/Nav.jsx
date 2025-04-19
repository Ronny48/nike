import { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <header className="padding-x py-8 z-20 fixed rounded-2xl bg-white/80 backdrop-blur-lg w-full">
      <nav className="flex justify-between items bg-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>
      </nav>
      {isMenuOpen && (
        <>
          {/* Blur Background */}
          <div
            className="fixed z-10"
            onClick={toggleMenu} // Close menu when clicking outside
          ></div>

          {/* Hamburger Menu */}
          <div className="fixed top-0 right-0 h-60 w-64 bg-white/80 backdrop-blur-lg rounded-xl shadow-lg z-20 p-6">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-slate-gray text-xl font-bold"
            >
              &times;
            </button>
            <ul className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default Nav;
