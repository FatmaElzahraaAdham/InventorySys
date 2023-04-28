import React from 'react';
import WarehouseBody from './WarehouseBody';
import '../styles/WarehouseTable.css';


const WarehouseTable = (props) => {
    const WarehousesData = props.warehouses;
    return (
        <table className="warehouse-table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Location</th>
                <th>Status</th>
                <th>Supervisor</th>
                <th>Manage</th>
            </tr>
            </thead>
            <tbody>
            {WarehousesData.map((item) => (
                <WarehouseBody
                id={item.warehouse_id}
                name={item.name} 
                location={item.location} 
                status={item.status} 
                supervisor={item.supervisor_id}
                 />
            ))}
            </tbody>
        </table>
    );
};

export default WarehouseTable;
