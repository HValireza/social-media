import React from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

function Nav() {
  const [mobileNav, setMobileNav] = React.useState(false);
  return (
    <div className="max-w-[1240px] flex justify-between items-center h-24 px-4 mx-auto">
      <h1 className="text-black font-bold text-3xl">REACT.</h1>
      <div className="flex items-center gap-1 p-1 rounded-lg border border-gray-300">
        <AiOutlineSearch size={20} />
        <input className="outline-none" type="text" placeholder="search" />
      </div>
      <ul className="hidden md:flex font-bold text-xs">
        <li className="p-4">Home</li>
        <li className="p-4">Profile</li>
        <li className="p-4">About us</li>
      </ul>
      <div
        onClick={() => setMobileNav(!mobileNav)}
        className="block md:hidden cursor-pointer"
      >
        {mobileNav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          mobileNav
            ? "fixed bg-white left-0 top-0 w-[60%] h-full border-r border-r-gray-200 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-black font-bold text-3xl m-4">REACT.</h1>
        <ul className="p-4 uppercase font-bold text-xs">
          <li className="p-4 border-b border-b-gray-500">Home</li>
          <li className="p-4 border-b border-b-gray-500">Profile</li>
          <li className="p-4">About us</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
