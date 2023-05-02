import React from 'react';
import '../styles/SearchAdd.css';

const SearchAdd = ({ onAdd }) => {
    const handleAddClick = () => {
        if (typeof onAdd === 'function') {
            onAdd();
        }
    };

    return (
        <div className="table_search_add">
            <button className="Add_btn" onClick={handleAddClick}>
                ADD
            </button>
            <div className="searchBar_logo">
                <input type="text" placeholder="Search" className="search" />
                <div className="logo">
                    <button className="logo_image">
                        <img src="../../images/search.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchAdd;
