import React from 'react';
import { contentURL } from '../../constants';
import './GlassCard.css';

export default ({glass}) => {
    return (
        <a className="sb-de-glass-card" href={glass.salesLink} target="_blank" rel="noopener noreferrer">
            <h1>{glass.name}</h1>
            <img src={contentURL+glass.image.url} alt={`The famous glasses ${glass.name}`} />
            <h2>{`${glass.speed} km/h`}</h2>
        </a>
    );
}