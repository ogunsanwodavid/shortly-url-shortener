import { useState } from "react";

import Logo from "../assets/logo.svg";
import iconMenu from "../assets/icon-menu.svg";
import iconClose from "../assets/icon-close.svg";
import Button from "./Button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen((m) => !m);
  }

  return (
    <div className="relative w-full max-w-[720px] mx-auto flex items-center justify-between p-7 cursor-pointer md:px-0 lg:max-w-[1000px]">
      <section className="w-max md:flex md:items-center md:space-x-10">
        {/*** Logo */}
        <img src={Logo} className="h-8" />

        {/*** Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-5 text-gray text-lg font-bold">
          <li className="md:hover:text-black">Features</li>
          <li className="md:hover:text-black">Pricing</li>
          <li className="md:hover:text-black">Resources</li>
        </ul>
      </section>

      <section className="w-max ">
        {/** Menu icon */}
        <img
          src={isMenuOpen ? iconClose : iconMenu}
          className="h-5 md:hidden"
          onClick={handleMenuClick}
        />

        {/** Nav buttons */}
        <div className="hidden md:flex items-center space-x-6 font-bold">
          {/** Login button */}
          <p className="text-gray text-lg md:hover:text-black">Login</p>

          {/** Sign up button */}
          <Button buttonClass={`md:hover:opacity-60`}>Sign Up</Button>
        </div>
      </section>

      {/** Mobile menu */}
      {isMenuOpen && (
        <section className="absolute top-full w-[calc(100%_-_3.5rem)] bg-dark-violet p-4 text-white text-lg font-bold text-center rounded-lg">
          {/** Navlinks */}
          <ul className="w-full py-5 space-y-5 border-b-[1px] border-grayish-violet">
            <li>Features</li>

            <li>Pricing</li>

            <li>Resources</li>
          </ul>

          {/** Mobile nav buttons */}
          <div className="w-full py-5 space-y-5">
            <p>Login</p>

            <Button buttonClass={"w-full"}>Sign up</Button>
          </div>
        </section>
      )}
    </div>
  );
}

export default Navbar;
