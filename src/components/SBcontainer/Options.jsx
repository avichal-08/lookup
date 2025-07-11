import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { TbMessage2Heart } from "react-icons/tb";
import { MdOutlineNotifications } from "react-icons/md";
import { MdOutlineVideoCall } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
export function Options(){
    return(
        <nav className="mt-6 ml-2 h-full">
            <NavLink to="/" className={({isActive})=>`flex cursor-pointer hover:bg-[#56CCF2] ${isActive?'bg-[#56CCF2]':''} mt-9 pl-6 mr-2 rounded`}><div className=" mt-1 mr-2"><GoHome size={30} /></div><div className=" ml-2 text-[25px] font-serif">Home</div></NavLink>
            <div className="flex cursor-pointer hover:bg-[#56CCF2] ${isActive?'bg-[#56CCF2]':''} mt-5 pl-6 mr-2 rounded"><div className=" mt-1 mr-2"><CiSearch size={30} /></div><div className="ml-2 text-[25px] font-serif ">Search</div></div>
            <div className="flex cursor-pointer hover:bg-[#56CCF2] ${isActive?'bg-[#56CCF2]':''} mt-5 pl-6 mr-2 rounded"><div className=" mt-1 mr-2"><MdOutlineVideoCall size={33} /></div><div className="ml-2 text-[25px] font-serif ">Create</div></div>
            <div className="flex cursor-pointer hover:bg-[#56CCF2] ${isActive?'bg-[#56CCF2]':''} mt-5 pl-6 mr-2 rounded"><div className=" mt-1 mr-2"><MdOutlineExplore size={30} /></div><div className="ml-2 text-[25px] font-serif">Explore</div></div>
            <div className="flex cursor-pointer hover:bg-[#56CCF2] ${isActive?'bg-[#56CCF2]':''} mt-5 pl-6 mr-2 rounded"><div className=" mt-1 mr-2 ml-1"><TfiVideoClapper size={30} /></div><div className="ml-2 text-[25px] font-serif">Reels</div></div>
            <div className="flex cursor-pointer hover:bg-[#56CCF2] ${isActive?'bg-[#56CCF2]':''} mt-6 pl-6 mr-2 rounded"><div className=" mt-1 mr-2"><TbMessage2Heart size={30} /></div><div className="ml-2 text-[25px] font-serif">Messages</div></div>
            <div className="flex cursor-pointer hover:bg-[#56CCF2] ${isActive?'bg-[#56CCF2]':''} mt-5 pl-5 mr-2 rounded"><div className=" mt-1 mr-2"><MdOutlineNotifications size={30} /></div><div className="ml-2 text-[25px] font-serif">Notifications</div></div>
            <NavLink to="/profile" className={({isActive})=>`flex cursor-pointer hover:bg-[#56CCF2] ${isActive?'bg-[#56CCF2]':''} mt-5 pl-6 mr-2 rounded`}><div className=" mt-1 mr-2"><CgProfile  size={30} /></div><div className="ml-2 text-[25px] font-serif">Profile</div></NavLink>
            <NavLink to="/settings" className={({isActive})=>`flex cursor-pointer hover:bg-[#56CCF2] ${isActive?'bg-[#56CCF2]':''} mt-5 pl-6 mr-2 rounded`}><div className=" mt-1 mr-2"><IoSettingsOutline  size={30} /></div><div className="ml-2 text-[25px] font-serif">Settings</div></NavLink>
        </nav>
    )
}