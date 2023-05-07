import "./styles/App.css"
import  Header  from "./components/Header";
import Sidebar from "./components/Sidebar";
import  Content  from "./components/Content";

import Login from "./components/Login";

function handleLogin(){
    return localStorage.getItem('loggedIn') === 'true';
}
function handleType(){
    return localStorage.getItem('sessionID') !== '1';
}
function App(){
    if(handleLogin()) {  // if user is logged in
        if(handleType()){
           return( <div className="App">
            <Header/>
            <Sidebar/>
            <Content />
        </div>);
        }else{
            return(
        <div className="App">
            <Header/>
            <Sidebar/>
            <Content />
        </div>);
        }
        
    }
    return (<div>
            <Login/>
        </div>);
}


export default App;