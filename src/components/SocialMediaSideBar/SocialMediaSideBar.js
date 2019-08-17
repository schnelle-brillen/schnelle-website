import React from 'react';

import './SocialMediaSideBar.css';

export default ({ elements }) => {
    return (
        <div className="sb-de-social-media-side-bar">
            {
                elements.map(({ icon, link }) => (
                    <a className="sb-de-social-media-bar-element" href={link} target="_blank" rel="noopener noreferrer">
                        {icon}
                    </a>
                ))
            }
        </div>
    );
}