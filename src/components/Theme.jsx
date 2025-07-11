import { useRecoilState } from "recoil";
import { themeAtom } from "../atoms/Theme";
export default function Themes(){
    const[theme,setTheme] =useRecoilState(themeAtom)
    // const[scolor,setScolor] =useRecoilState(scolorAtom)
    // const[mcolor,setMcolor] =useRecoilState(mcolorAtom)
    return(
        <div className={`${theme?'bg-gray-900':'bg-[#F5F6FA]'} ml-5 w-30 h-60`}>
            <button onClick={()=>setTheme(false)} style={{boxShadow:theme?"5px 5px 2px rgba(255, 255, 255, 0.5)":"4px 4px 2px rgba(0, 0, 0, 0.25)"}} className="bg-[#F5F6FA] text-black cursor-pointer  font-medium rounded w-25 h-13 mb-5">Light</button>
            <button onClick={()=>setTheme(true)} style={{boxShadow:theme?"5px 5px 2px rgba(255, 255, 255, 0.5)":"4px 4px 2px rgba(0, 0, 0, 0.25)"}} className="bg-black text-white cursor-pointer font-medium rounded w-25 h-13 mb-5">Dark</button>
            {/* <button onClick={()=>{
                setMcolor("bg-pink-500")
                setScolor("bg-pink-300")
                setTheme(false)}} style={{boxShadow:theme?"5px 5px 2px rgba(255, 255, 255, 0.5)":"4px 4px 2px rgba(0, 0, 0, 0.25)"}} className="bg-pink-500 text-white cursor-pointer  font-medium rounded w-25 h-13 mb-5">Pink</button> */}
        </div>
    )
}