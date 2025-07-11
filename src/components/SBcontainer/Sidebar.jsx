import { Options } from "./Options"
import { useRecoilValue } from "recoil";
import { themeAtom } from "../../atoms/Theme";
export function Sidebar(){
    const theme=useRecoilValue(themeAtom)
    return(
        <div className={`${theme?'bg-gray-900 text-white':'bg-[#F5F6FA]'} border border-r-gray-300 w-60 h-screen fixed `}>
            <div className="text-[30px] font-medium pl-8 pt-3 cursor-pointer">
                𝓛𝓸𝓸𝓴𝓾𝓹
            </div>
            <Options/>
        </div>
    )
}