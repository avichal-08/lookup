import { BrowserRouter,Route,Routes,useNavigate } from "react-router-dom";
export default function Hcontent(){
    const navigate=useNavigate();
    return(
        <div style={{boxShadow:"5px 5px 2px rgba(0, 0, 0, 0.25)"}} className="flex justify-around bg-white mx-20 mt-45 mb-20 h-13 rounded">
            <button onClick={()=>{navigate("/profile")}} className="bg-[#2F80ED] hover:bg-[#56CCF2] w-25 m-2 rounded font-medium">Posts</button>
            <button onClick={()=>{navigate("/profile/likesyou")}}  className="bg-[#2F80ED] hover:bg-[#56CCF2] w-25 m-2 rounded font-medium">Likes You</button>
            <button onClick={()=>{navigate("/profile/matches")}} className="bg-[#2F80ED] hover:bg-[#56CCF2] w-25 m-2 rounded font-medium">Matches</button>
            <button onClick={()=>{navigate("/profile/dates")}} className="bg-[#2F80ED] hover:bg-[#56CCF2] w-25 m-2 rounded font-medium">Dates</button>
        </div>
    )
}