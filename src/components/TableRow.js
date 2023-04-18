import React from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

const TableRow = ({ item, columns, editButton, editButtonText, deleteButton, deleteButtonText, onEdit, onDelete }) => {
    return (
        <tr>
            {columns.map((column) => (
                <td
                    key={column}
                    className={  // This applied a class of the same value only to the status column, so it can be styled.
                        column.toLowerCase() === 'status'
                            ? item[column.toLowerCase()].toLowerCase()
                            : null
                    }
                >
                    {item[column.toLowerCase()]}
                </td>
            ))}
            <td>
                {editButton && onEdit && (
                    <EditButton onClick={() => onEdit(item)} buttonText={editButtonText}/>
                )}
                {deleteButton && onDelete && (
                    <DeleteButton onClick={() => onDelete(item)} buttonText={deleteButtonText}/>
                )}
            </td>
        </tr>
    );
};

export default TableRow;
