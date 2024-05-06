import React from "react";
import profileImage from "../assets/profile.jpg";
import profileImage2 from "../assets/profile2.jpg";
import { AiFillCaretRight } from "react-icons/ai";
function Stories() {
  return (
    <div className="max-w-[1240px] h-24 flex items-center justify-between mx-auto px-4 gap-2 border-b border-b-gray-300">
      <div className="w-full flex gap-2 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-0 hover:scrollbar-thumb-gray-300">
        <div className="flex flex-col items-center">
          <img
            src={profileImage}
            alt="/"
            className="w-14 aspect-square object-fit rounded-full border-2 border-gray-700"
          />
          <p className="text-xs font-semibold text-gray-600">your story</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={profileImage2}
            alt="/"
            className="w-14 aspect-square object-fit rounded-full border-2 border-red-700"
          />
          <p className="text-xs font-semibold text-gray-600">username</p>
        </div>
      </div>
      <div>
        <button className="bg-gray-300 py-6 px-1 rounded-md mb-2">
          <AiFillCaretRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default Stories;
