import React, { Dispatch, SetStateAction } from "react";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlinePlusCircle,
  AiOutlineUser,
  AiOutlineMessage,
} from "react-icons/ai";

function Navigation({ showMessage }: any) {
  return (
    <div className="w-full h-full flex items-center justify-between border-2 rounded-lg border-gray-300 bg-gray-300 lg:flex-col">
      <div className="py-4 px-8 cursor-pointer lg:py-8 lg:px-4">
        <AiOutlineHome size={26} />
      </div>
      <div className="py-4 px-8 cursor-pointer lg:py-8 lg:px-4">
        <AiOutlineSearch size={26} />
      </div>
      <div className="py-4 px-8 cursor-pointer lg:py-8 lg:px-4">
        <AiOutlinePlusCircle size={26} />
      </div>
      <div className="py-4 px-8 cursor-pointer lg:py-8 lg:px-4">
        <AiOutlineUser size={26} />
      </div>
      <div
        className="py-4 px-8 cursor-pointer lg:py-8 lg:px-4 md:hidden lg:hidden"
        onClick={() => showMessage(true)}
      >
        <AiOutlineMessage size={26} />
      </div>
    </div>
  );
}

export default Navigation;
