import React from 'react';
import "../styles/EditDeleteBtns.css"

const EditButton = ({ onClick }) => {
    return (
        <button className="edit-btn" onClick={onClick}>
            Edit
        </button>
    );
};

export default EditButton;
