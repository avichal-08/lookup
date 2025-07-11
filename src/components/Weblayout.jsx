import { Outlet } from "react-router-dom";
import { Sidebar } from './SBcontainer/Sidebar'
export default function Weblayout(){
    return(
        <div className="flex">
            <Sidebar/>
            <Outlet/>
        </div>
    )
}