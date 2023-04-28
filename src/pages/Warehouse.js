import { useState, useEffect } from 'react';
import "../styles/WarehouseStyle.css"
import WarehouseTable from "../components/WarehouseTable";
import "../styles/WarehouseTable.css"
import PageTitle from "../components/PageTitle";
import SearchAdd from "../components/SearchAdd";

function Warehouse() {
    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/allWarehouse', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('sessionID')
            },
        })
            .then(response => response.json())
            .then(data => setWarehouses(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="page-content">
            <PageTitle title="Warehouse" subtext="View/Manage"/>
            <div className="warehouse-table-block">
                <SearchAdd />
                <WarehouseTable warehouses={warehouses} />
            </div>
        </div>
    );
}

export default Warehouse;
