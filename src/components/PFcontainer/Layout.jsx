import {Profile} from './Profile'
import { useRecoilValue } from "recoil";
import { themeAtom } from "../../atoms/Theme";
export default function Layout(){
    const theme=useRecoilValue(themeAtom)
    return(
        <div className={`${theme?'bg-gray-900':''} w-full ml-60 px-14 h-screen pt-8`}>
            <Profile/>
        </div>
    )
}