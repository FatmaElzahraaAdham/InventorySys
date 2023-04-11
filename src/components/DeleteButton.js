import React from 'react';
import "../styles/EditDeleteBtns.css"

const DeleteButton = ({ onClick }) => {
    return (
        <button className="delete-btn" onClick={onClick}>
            Delete
        </button>
    );
};

export default DeleteButton;
