import {Settings} from './Settings'
import { useRecoilValue } from "recoil";
import { themeAtom } from "../atoms/Theme";
export default function Settingslayout(){
    const theme=useRecoilValue(themeAtom)
    return(
        <div className={`${theme?'bg-gray-900':'bg-[#F5F6FA]'} w-full ml-60 px-14 pt-8 h-full`}>
            <Settings/>
        </div>
    )
}