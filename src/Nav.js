import React from 'react';
import SearchBox from './SearchBox';
import './Nav.css';

const Nav = () => {
    return (
        <header>
            <nav className="navbar navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="https://www.google.com/">Websource</a>
                    <SearchBox />
                </div>
            </nav>
        </header>
    )
}

export default Nav;