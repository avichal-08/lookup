import { Options } from "./Options"
export function Sidebar(){
    return(
        <div style={{backgroundColor:"#F5F6FA"}}className=" border border-r-gray-300 w-60 h-screen fixed ">
            <div className="text-[30px] font-medium pl-8 pt-3 cursor-pointer">
                𝓛𝓸𝓸𝓴𝓾𝓹
            </div>
            <Options/>
        </div>
    )
}