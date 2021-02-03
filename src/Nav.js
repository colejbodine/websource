import React from 'react';
import SearchBox from './SearchBox';
import './Nav.css';

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="www.google.com">Navbar</a>
                    <SearchBox />
                </div>
            </nav>
        </div>
    )
}

export default Nav;