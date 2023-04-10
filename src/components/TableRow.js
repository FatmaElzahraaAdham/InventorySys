import React from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

const TableRow = ({ item, columns, editButton, deleteButton, onEdit, onDelete }) => {
    return (
        <tr>
            {columns.map((column) => (
                <td key={column}>{item[column.toLowerCase()]}</td>
            ))}
            <td>
                {editButton && onEdit && (
                    <EditButton onClick={() => onEdit(item)} />
                )}
                {deleteButton && onDelete && (
                    <DeleteButton onClick={() => onDelete(item)} />
                )}
            </td>
        </tr>
    );
};

export default TableRow;
