import "../styles/App.css"
import  Header  from "../components/Header";
import Sidebar from "../components/Sidebar";
import  Content  from "../components/Content";
import { Outlet } from "react-router-dom";

function Home(){
    return <div className="App">
        
         <Header/>
         <Sidebar/>
         
         <Content />
    

   
    
    </div>
}
 

export default Home;