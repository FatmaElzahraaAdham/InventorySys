import {Route,Routes} from "react-router-dom"

import Dashboard from '../pages/Dashboard'
import Warehouse from '../pages/Warehouse'
import Product from '../pages/Product'
import Supervisor from '../pages/Supervisor'
import Request from "../pages/Request";


function AppRoutes(){
    return(
        <Routes>
            <Route path="/Dashboard" element={<Dashboard/>}></Route>
            <Route path="/Warehouse" element={<Warehouse/>}></Route>
            <Route path="/Product" element={<Product/>}></Route>
            <Route path="/Supervisor" element={<Supervisor/>}></Route>
            <Route path="/Request" element={<Request/>}></Route>
        </Routes>
    )
    
}

export default AppRoutes;