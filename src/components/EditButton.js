import React from 'react';
import "../styles/EditDeleteBtns.css"

const EditButton = ({ onClick, buttonText }) => {
    return (
        <button className="edit-btn" onClick={onClick}>
            {buttonText}
        </button>
    );
};

export default EditButton;
