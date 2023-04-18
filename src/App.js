import "./styles/App.css"
import  Header  from "./components/Header";
import Sidebar from "./components/Sidebar";
import  Content  from "./components/Content";

import Login from "./components/Login";

function App(){
    if(true) {  // if user is logged in
        return(
        <div className="App">
            <Header/>
            <Sidebar/>
            <Content />
        </div>);
    }
    return (<div>
            <Login/>
        </div>);
}


export default App;