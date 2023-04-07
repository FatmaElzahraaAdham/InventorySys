import React from 'react';

const WarehouseRow = ({ warehouse }) => {
    const { id, name, location, status, supervisor } = warehouse;
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{location}</td>
            <td className={status}>{status}</td>
            <td>{supervisor}</td>
            <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
            </td>
        </tr>
    );
};

export default WarehouseRow;
