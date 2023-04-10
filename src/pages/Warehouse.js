import "../styles/WarehouseStyle.css"
import WarehouseTable from "../components/WarehouseTable";
import "../styles/WarehouseTable.css"
import { useState } from 'react';
import PageTitle from "../components/PageTitle";
import AddWareHouse from "../components/AddWareHouse";

function Warehouse() {
    const [warehouses, setWarehouses]= useState([
    {
        id: 1,
        name: 'Warehouse 1',
        location: 'Location 1',
        status: 'Active',
        supervisor: 'John Doe',
    },
    {
        id: 2,
        name: 'Warehouse 2',
        location: 'Location 2',
        status: 'Inactive',
        supervisor: 'Jane Smith',
    },
    {
        id: 3,
        name: 'Warehouse 3',
        location: 'Location 3',
        status: 'Active',
        supervisor: 'Bob Johnson',
    },
]);
function newWarehouse(name, location, status,supervisor) {
        const newWarehouse = {
            name: name,
            location: location,
            status: status,
            supervisor: supervisor,
        };
        setWarehouses([...warehouses, newWarehouse]);
    }
    return (
        <div className="page-content">
            <PageTitle title="Warehouse" subtext="View/Manage"/>
            <div className="warehouse-table-wrapper">
                <div className="warehouse-table-header">
                    <h1>Warehouse List</h1>
                    <div className="table-toolbar">
                        <AddWareHouse newWarehouse={newWarehouse}/>
                        <input
                            type="text"
                            placeholder="Search"
                            className="search-bar"
                        />
                    </div>
                </div>
                <WarehouseTable warehouses={warehouses} />
            </div>
        </div>
    );
}

export default Warehouse;