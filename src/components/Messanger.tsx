import React from "react";
import Contact from "./Contact";

function Messanger() {
  return (
    <div className="w-full h-full flex flex-col items-center overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-300">
      <Contact />
      <Contact />
      <Contact />
    </div>
  );
}

export default Messanger;
