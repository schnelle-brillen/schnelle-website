import React from 'react';

import './Button.css';

export default ({children, className="", style, onClick}) => {
    return (
        <button className={`sb-de-button ${className}`} style={style} onClick={onClick}>
            {children}
        </button>
    )
}