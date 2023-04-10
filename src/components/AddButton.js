import React from 'react';

const AddButton = ({ buttonText, onButtonClick }) => {
    return (
        <button className="add-btn" onClick={onButtonClick}>
            {buttonText}
        </button>
    );
};

export default AddButton;
