import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/App.css"
import  Header  from "./components/Header";
import  Footer  from "./components/Footer";
import Sidebar from "./components/Sidebar";
import  Content  from "./components/Content";
function App(){
    return <div className="App">
    <Header/>
    <Sidebar/>
    <Content />
    <Footer/>
    </div>
}
 

export default App;
