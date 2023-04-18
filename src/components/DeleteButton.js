import React from 'react';
import "../styles/EditDeleteBtns.css"

const DeleteButton = ({ onClick, buttonText }) => {
    return (
        <button className="delete-btn" onClick={onClick}>
            {buttonText}
        </button>
    );
};


export default DeleteButton;
