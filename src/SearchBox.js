import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className="d-flex">
            <input 
                className="d-flex me-2" 
                type="search" 
                placeholder="Search"
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;