import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoTriangle } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <li className="menu">Home</li><span>|</span>
      <li className="menu">Blog</li><span>|</span>
      <li className="menu">About Us</li><span>|</span>
      <li className="relative group flex items-center h-full">
        <span className="menu">
          Services <MdOutlineKeyboardArrowDown />
        </span>
        <ul className="absolute right-0 top-12 hidden bg-blue-500 rounded-md w-36 group-hover:flex flex-col justify-center items-center gap-2 text-center p-2">
          <span className="absolute -top-3 right-0 text-blue-500"><IoTriangle /></span>
          <li className="sub_menu">Section-1</li>
          <li className="sub_menu">Section-2</li>
          <li className="sub_menu">Section-3</li>
          <li className="sub_menu">Section-4</li>
        </ul>
      </li><span>|</span>
      <li className="menu">Contact Us</li>
    </>
  );
};

export default Navbar;
