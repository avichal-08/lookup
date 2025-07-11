import { Outlet ,NavLink} from "react-router-dom";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../atoms/Theme";
export function Settings(){
    const theme=useRecoilValue(themeAtom)
    return(
        <div className="flex">
            <div className={`w-50 h-screen ${theme?'bg-gray-900':'bg-[#F5F6FA]'} relative p-3`}>
                <NavLink to="/settings/theme" className={({isActive})=>`absolute cursor-pointer hover:bg-[#56CCF2] ${isActive?'bg-[#56CCF2]':'bg-blue-200'} w-44 h-13 pt-2 pl-11 rounded text-[25px] font-serif`}>Theme</NavLink>
            </div>
        <Outlet/>
        </div>
    )
}