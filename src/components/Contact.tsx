import React from "react";
import profileImg from "../assets/profile2.jpg";

function Contact() {
  return (
    <div className="w-full h-14 py-1 flex items-center gap-2 border-b-2 cursor-pointer">
      <img
        src={profileImg}
        alt="/"
        className="w-12 aspect-square rounded-full"
      />
      <div className="flex flex-col justify-center">
        <h4 className="text-xm font-semibold">username</h4>
        <p className="text-xs font-semibold">state</p>
      </div>
    </div>
  );
}

export default Contact;
