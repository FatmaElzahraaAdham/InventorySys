import React from 'react';
import TableRow from './TableRow';
import "../styles/Table.css"

const Table = ({ data, columns, onEdit, onDelete, editButton, editButtonText, deleteButton, deleteButtonText }) => {
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
                    editButtonText={editButtonText}
                    deleteButton={deleteButton}
                    deleteButtonText={deleteButtonText}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
            </tbody>
        </table>
    );
};

export default Table;
