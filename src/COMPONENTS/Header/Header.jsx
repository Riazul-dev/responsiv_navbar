import React, { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="h-12 bg-gradient-to-t from-blue-900 via-blue-400 to-blue-900 flex justify-between items-center px-10 sticky top-0 z-10">
      <Logo />
      {/* Code for Mobile Device */}
      <div
        onClick={() => setToggle(!toggle)}
        className="md:hidden flex justify-center items-center text-xl cursor-pointer border border-fuchsia-900 text-fuchsia-900 rounded p-1 z-10"
      >
        {toggle ? <IoClose /> : <TiThMenu />}
      </div>

      {toggle && (
        <ul className="md:hidden bg-blue-600 absolute top-0 left-0 w-full h-screen flex flex-col justify-start items-center gap-4 pt-20">
          <MobileMenu />
        </ul>
      )}
      {/* Code for Larg Device */}
      <ul className="hidden md:flex items-center list-none gap-4 h-full">
        <Navbar />
      </ul>
    </header>
  );
};

export default Header;
