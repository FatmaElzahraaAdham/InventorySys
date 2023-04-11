import React from 'react';
import TableRow from './TableRow';
import "../styles/Table.css"

const Table = ({ data, columns, onEdit, onDelete, editButton, deleteButton }) => {
    return (
        <table className="table">
            <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column}>{column}</th>
                ))}
                <th>Manage</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <TableRow
                    key={item.id}
                    item={item}
                    columns={columns}
                    editButton={editButton}
                    deleteButton={deleteButton}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
            </tbody>
        </table>
    );
};

export default Table;
