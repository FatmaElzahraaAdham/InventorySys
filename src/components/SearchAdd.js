import React from 'react'
import '../styles/SearchAdd.css';
const SearchAdd = () => {
  return (
    <div className="table_search_add">
                        <button className="Add_btn">ADD</button>
                        <div className="searchBar_logo">
                        <input
                            type="text"
                            placeholder="Search"
                            className="search"
                        />
                        <div className="logo">
                         <button className="logo_image">
                         <img src="../../images/search.png" alt=""></img>
                         </button>
                        </div>
                        </div>

    </div>
  )
}

export default SearchAdd