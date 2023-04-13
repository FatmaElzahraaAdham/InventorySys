import React from 'react';
import WarehouseBody from './WarehouseBody';
import '../styles/WarehouseTable.css';

const WarehousesData = [
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
        status: 'Active',
        supervisor: 'Jane Smith',
    },
    {
        id: 3,
        name: 'Warehouse 3',
        location: 'Location 3',
        status: 'Inactive',
        supervisor: 'Bob Johnson',
    },
];
const WarehouseTable = () => {
    const item= WarehousesData;
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
                key={item.id} 
                id={item.id}
                name={item.name} 
                location={item.location} 
                status={item.status} 
                supervisor={item.supervisor}
                 />
            ))}
            </tbody>
        </table>
    );
};

export default WarehouseTable;
