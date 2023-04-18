import React from 'react';
import AddButton from './AddButton';
import "../styles/Table.css"

const TableHeader = ({ title, buttonText, onButtonClick, showAddButton}) => {
    return (
        <div className="table-header">
            <h1>{title}</h1>
            <div className="table-toolbar">
                {showAddButton && <AddButton buttonText={buttonText} onButtonClick={onButtonClick}/>}
                <input type="text" placeholder="Search" className="search-bar" />
            </div>
        </div>
    );
};

export default TableHeader;