import React from 'react';

import './Navbar.css';

export default ({ children, toIndexPage}) => {
    return (
        <div className="sb-de-navbar-wrapper">
            <div className="sb-de-navbar">
                <button className="sb-de-navbar-logo">
                    <img src="/android-chrome-192x192.png" alt="A fast S followed by a faster B" onClick={toIndexPage}/>
                </button>
                <div className="sb-de-navbar-elements">
                    {children}
                </div>
            </div>
        </div>
    );

}