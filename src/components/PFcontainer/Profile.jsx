import avi from "../../assets/avi.png";
import React from 'react';
import { useRecoilValue } from "recoil";
import { themeAtom } from "../../atoms/Theme";
const Hcontent = React.lazy(()=>import("./Hcontent"));
import { Outlet } from "react-router-dom";
export function Profile(){
  const theme=useRecoilValue(themeAtom)
    return(
      <div className={`${theme?'bg-gray-900 border border-white':'bg-[#F5F6FA]'} h-full relative w-full`}>
            <div className=" w-full h-40 bg-[#2F80ED] relative rounded text-white">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.2) 0, rgba(0, 255, 128, 0.2) 1px, transparent 1px, transparent 20px),
          repeating-linear-gradient(-45deg, rgba(0, 255, 128, 0.2) 0, rgba(0, 255, 128, 0.2) 1px, transparent 1px, transparent 20px)
        `,
        backgroundSize: "40px 40px",
      }}
    />
    <div className="w-50 h-50 ml-20 pt-16 absolute "><img className="border border-gray-900 cursor-pointer rounded-full" src={avi}></img></div>
    <div>
    <div className="flex absolute font-medium text-[15px]">
        <button className="bg-gray-700 w-18 h-7 ml-200 mt-4 rounded cursor-pointer hover:bg-gray-900">Edit</button>
        <button className="bg-gray-700 w-18 h-7 ml-4 mt-4 rounded cursor-pointer hover:bg-gray-900">Share</button>
    </div>
    <div className="w-100 absolute ml-80 mt-13">
        <p className="cursor-pointer text-[17px]">@avichal.08</p>
        <h1 className="text-[25px]">Avichal Pandey</h1>
        <div className="flex justify-between pt-2 text-[17px] ">
            <p className="cursor-pointer">0 Posts</p>
            <p className="cursor-pointer">0 Followers</p>
            <p className="cursor-pointer">0 Followings</p>
            <p className="cursor-pointer">0 Matches</p>
        </div>
    </div>
    <div className={`${theme?'text-white':'text-black'} absolute ml-80 mt-45  text-[18px] leading-tight`}>
        <p>Cricketer</p>
        <p>Born on xx/yy/zzzz</p>
        <p>xyzphile</p>
        <p>RCB RCB</p>
    </div>
  </div>
  </div>
  <Hcontent/>
  <Outlet/>
</div>
    )
}