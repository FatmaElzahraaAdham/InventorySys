import "./styles/App.css"
import  Header  from "./components/Header";
import Sidebar from "./components/Sidebar";
import  Content  from "./components/Content";

import Login from "./components/Login";
import { Outlet } from "react-router-dom";

function App(){
    return <div className="App">
   <Header/>
    <Sidebar/>
    <Content />
    </div>
}
 

export default App;