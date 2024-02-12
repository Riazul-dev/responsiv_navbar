import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const MobileMenu = () => {
    const [isClick, setIsClick] = useState(false);
  return (
    <>
      <li className="mobile_menu">Home</li>
      <li className="mobile_menu">Blog</li>
      <li className="mobile_menu">About Us</li>
      <li className="flex flex-col justify-center items-center gap-2 group cursor-pointer" onClick={()=>setIsClick(!isClick)}><span className="mobile_menu flex justify-center items-center">Services <MdOutlineKeyboardArrowDown /></span> 
        <ul className={`${isClick?'block':'hidden'} flex flex-col justify-center items-center gap-4 translate-x-2/3 p-2`}>
            <li className="mobile_sub_menu">Section-1</li>
            <li className="mobile_sub_menu">Section-2</li>
            <li className="mobile_sub_menu">Section-3</li>
            <li className="mobile_sub_menu">Section-4</li>
        </ul>
      </li>
      <li className="mobile_menu">Contact Us</li>
    </>
  )
}

export default MobileMenu
