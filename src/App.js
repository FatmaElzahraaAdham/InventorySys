import {Space} from "antd";
import "./styles/App.css"
import  Header  from "./components/Header";
import  Footer  from "./components/Footer";
import Sidebar from "./components/Sidebar";
import  Content  from "./components/Content";

function App(){
    return <div className="App">
    <Header/>
    <Space className="SidebarAndContent">

    <Sidebar />
    <Content />

    </Space>
    <Footer/>
    </div>
}
 

export default App;
