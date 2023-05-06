import React from "react";
import {AppstoreOutlined, BankOutlined, FileDoneOutlined, ShoppingCartOutlined, TeamOutlined, CheckSquareOutlined} from "@ant-design/icons";

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <AppstoreOutlined/>,
        link: "/Dashboard",
    },
    {
        title: "Warehouse",
        icon: <BankOutlined/>,
        link: "/Warehouse",
    },
    {
        title: "Supervisors",
        icon: <TeamOutlined/>,
        link: "/Supervisor",
    },
    {
        title: "Products",
        icon: <ShoppingCartOutlined/>,
        link: "/Product",
    },
    {
        title: "Requests",
        icon: <FileDoneOutlined/>,
        link: "/Request",
    },
    {
        title: "Assign",
        icon: <CheckSquareOutlined />,
        link: "/Productassign",
    }

]