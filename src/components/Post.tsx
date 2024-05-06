import React from "react";
import profileImage from "../assets/profile.jpg";
import postImage from "../assets/post.png";
import {
  AiOutlineMore,
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineSend,
  AiOutlineDownload,
} from "react-icons/ai";

function Post() {
  return (
    <div className="w-full max-w-md flex flex-col gap-2">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center justify-center gap-1">
          <img
            src={profileImage}
            alt="/"
            className="w-10 aspect-square object-fit rounded-full"
          />
          <h4 className="font-semibold">username</h4>
        </div>
        <button>
          <AiOutlineMore size={20} />
        </button>
      </div>
      <img
        src={postImage}
        alt="/"
        className="w-full rounded-md object-cover h-80"
      />
      <div className="w-full flex items-center justify-between">
        <div className="flex gap-2">
          <button>
            <AiOutlineHeart size={20} />
          </button>
          <button>
            <AiOutlineComment size={20} />
          </button>
          <button>
            <AiOutlineSend size={20} />
          </button>
        </div>
        <button>
          <AiOutlineDownload size={20} />
        </button>
      </div>
      <div>
        <h5 className="font-semibold text-xs">Caption...</h5>
        <p className="text-xs">
          this is just meaningless text for testing caption...
        </p>
      </div>
      <hr className="pb-2" />
    </div>
  );
}

export default Post;
