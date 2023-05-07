import React from "react";
import { AppstoreOutlined, BankOutlined, FileDoneOutlined, ShoppingCartOutlined, TeamOutlined, CheckSquareOutlined } from "@ant-design/icons";

var SidebarData = [];

function handleType() {
  return localStorage.getItem('sessionID') !== '1';
}

if (handleType()) {  // if user is Supervisor
  SidebarData = [
    {
      title: "Products",
      icon: <ShoppingCartOutlined />,
      link: "/Supervisor/products",
    },
    {
      title: "Requests",
      icon: <FileDoneOutlined />,
      link: "/Supervisor/Requests",
    },
  ];
} else {
  SidebarData = [
    {
      title: "Dashboard",
      icon: <AppstoreOutlined />,
      link: "/Dashboard",
    },
    {
      title: "Warehouse",
      icon: <BankOutlined />,
      link: "/Warehouse",
    },
    {
      title: "Supervisors",
      icon: <TeamOutlined />,
      link: "/Supervisor",
    },
    {
      title: "Products",
      icon: <ShoppingCartOutlined />,
      link: "/Product",
    },
    {
      title: "Requests",
      icon: <FileDoneOutlined />,
      link: "/Request",
    },
    {
      title: "Assign",
      icon: <CheckSquareOutlined />,
      link: "/Productassign",
    },
  ];
}

export default SidebarData;