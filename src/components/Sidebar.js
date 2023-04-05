import { AppstoreOutlined,BankOutlined,ShoppingCartOutlined,TeamOutlined } from "@ant-design/icons";
import {Menu} from "antd";
import { useNavigate } from "react-router-dom";
function Sidebar(){
    const navigate = useNavigate();

    return (
        <div className="AppSidebar">
        <Menu 
        onClick={(item) =>{
            navigate(item.key)
        }}
         items ={[
            {
            label: "Dashboard",
            icon: <AppstoreOutlined/>,
             key: "/",

            },
            {
                label: "Warehouse",
                icon: <BankOutlined/>,
                key: "/Warehouse",
            },
            {
                label:"Product",
                icon: <ShoppingCartOutlined/>,
                key: "/Product",
            },
            {
                label :"Supervisor",
                icon:<TeamOutlined/>,
                key : "/Supervisor",
            }
        ]}>
       
        </Menu>
        </div>
    )
}

export default Sidebar;