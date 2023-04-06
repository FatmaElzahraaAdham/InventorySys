
import { useNavigate } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import {Logo} from "./Logo"
function Sidebar(){
   const navigate = useNavigate();

    return (
        <div className="AppSidebar">
        <Logo/>
            <ul className="SidebarList">

                {SidebarData.map((val,key)=>{
                    return (
                        <li 
                        key={key}
                        className="row"
                        
                        onClick={() =>{
                            navigate(val.link)
                        }}
                        >
                            <div id="icon">{val.icon}</div><div id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        <div className="logout">Logout</div>
        </div>
    );
}

export default Sidebar;