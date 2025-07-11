import { useRecoilValue } from "recoil";
import { themeAtom } from "../atoms/Theme";
export default function(){
    const theme=useRecoilValue(themeAtom)
    return(
        <div className={`${theme?'bg-gray-900 text-white':'bg-white'} pl-120 pt-60 w-full h-screen  text-2xl`}>
            Home Section
        </div>
    )
}