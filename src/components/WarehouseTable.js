import React from 'react';
import WarehouseRow from './WarehouseRow';

const WarehouseTable = ({ warehouses }) => {
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
            {warehouses.map((warehouse) => (
                <WarehouseRow key={warehouse.id} warehouse={warehouse} />
            ))}
            </tbody>
        </table>
    );
};

export default WarehouseTable;
