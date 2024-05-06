import React from "react";
import Post from "./Post";
import Navigation from "./Navigation";
import Messanger from "./Messanger";

function Container() {
  const [showMessanger, setShowMessanger] = React.useState<boolean>(false);
  return (
    <div className="max-w-[1240px] h-[calc(100vh-12rem)] grid md:grid-cols-2 p-4 mx-auto lg:gap-4">
      <div
        className={
          showMessanger
            ? "w-full h-full hidden flex-col lg:flex-row-reverse lg:gap-4 justify-between overflow-hidden"
            : "w-full h-full flex flex-col lg:flex-row-reverse lg:gap-4 justify-between overflow-hidden"
        }
      >
        <div className="w-full h-full flex flex-col items-center overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-300">
          <Post />
          <Post />
        </div>
        <div className="w-full flex h-16 items-center justify-center lg:w-16 lg:h-full">
          <Navigation showMessage={setShowMessanger} />
        </div>
      </div>
      <div
        className={
          showMessanger
            ? "flex w-full h-full overflow-hidden md:flex"
            : "hidden w-full h-full overflow-hidden md:flex"
        }
      >
        <Messanger />
      </div>
    </div>
  );
}

export default Container;

//
