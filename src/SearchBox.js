import React from 'react';
import './SearchBox.css';

const SearchBox = () => {
    return (
        <div className="d-flex">
            <input className="d-flex me-2" type="search" placeholder="Search"/>
        </div>
    )
}

export default SearchBox;