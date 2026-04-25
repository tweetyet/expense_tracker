import { ChevronDown } from "lucide-react";
import React from "react";

const Userprofile = ({ name, title, src }) => {
  return (
    <div className="text-center">
      <div className="w-20 h-20 mx-auto bg-[#FFF1B5] rounded-full overflow-hidden mb-3 flex items-center justify-center text-[#43302E] text-lg ">
        {src ? (
          <img src={src} alt="profile-image" className="size-full" />
        ) : (
          "DP"
        )}
      </div>

      <h3 className="text-lg font-bold text-[#43302E]">{name}</h3>
      <p className="text-sm text-[#43302E]/60">{title}</p>
      <div className='flex bg-[#FFF1B5] w-fit mx-auto py-1 px-2 rounded-full items-center justify-center space-x-2 text-sm text-[#43302E] mt-2 hover:bg-[#43302E] hover:text-[#FFF1B5] cursor-pointer'>

        <span>Available</span>
        <ChevronDown size={16} className="text-[#43302E]  " />
      </div>
    </div>
  );
};

export default Userprofile;
