import React from 'react';
import { contentURL } from '../../constants';
import './GlassCard.css';

export default ({glass}) => {
    return (
        <div className="sb-de-glass-card">
            <h1>{glass.name}</h1>
            <img src={contentURL+glass.image.url} alt={`The famous glasses ${glass.name}`} />
            <h2>{`${glass.speed} km/h`}</h2>
        </div>
    );
}