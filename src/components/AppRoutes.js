import {Route,Routes} from "react-router-dom"

import Dashboard from '../pages/Dashboard'
import Warehouse from '../pages/Warehouse'
import Product from '../pages/Product'
import Supervisor from '../pages/Supervisor'
import Login from "./Login"
import Home from "../pages/Home"
import Request from "../pages/Request";
import ProductAssignment from "../pages/ProductAssignment";
import SupervisorProduct from "../pages/Supervisor_product"
import SupervisorRequest from "../pages/Supervisor_Request"
function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/Dashboard" element={<Dashboard/>}></Route>
            <Route path="/Warehouse" element={<Warehouse/>}></Route>
            <Route path="/Product" element={<Product/>}></Route>
            <Route path="/Supervisor" element={<Supervisor/>}></Route>
            <Route path="/Supervisor/products" element={<SupervisorProduct/>}></Route>
            <Route path="/Supervisor/Requests" element={<SupervisorRequest/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/Request" element={<Request/>}></Route>
            <Route path="/Productassign" element={<ProductAssignment/>}></Route>
        </Routes>
    )
    
}

export default AppRoutes;