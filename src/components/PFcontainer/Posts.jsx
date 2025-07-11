import { useRecoilValue } from "recoil";
import { themeAtom } from "../../atoms/Theme";
export default function Posts({prop}){
    const theme=useRecoilValue(themeAtom)
    return(
        <div style={{boxShadow:theme?"5px 5px 2px rgba(255, 255, 255, 0.5)":"5px 5px 2px rgba(0, 0, 0, 0.25)"}} className={` ${theme?'bg-gray-900 text-white':'bg-white'} rounded w-60 h-15 ml-70 pl-6 pt-3 text-2xl shadow`}>
            {prop}
        </div>
    )
}