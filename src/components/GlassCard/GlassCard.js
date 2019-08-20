import React from 'react';
import { contentURL } from '../../constants';
import { Button, Icon } from '../../components';

import './GlassCard.css';
export default (props) => {
    const {glass, onClick} = props;
    console.log(props)
    return (
        <div className="sb-de-glass-card">
            <div className="sb-de-glass-card-content">
                <h1>{glass.name}</h1>
                <img src={contentURL+glass.image.url} alt={`The famous glasses ${glass.name}`} />
                <h2>{`${glass.speed} km/h`}</h2>
            </div>
            { 
                <div className="sb-de-glass-card-buttons">
                    <Button className="sb-de-glass-shopping-card-button" onClick={onClick}>
                        <Icon.ShoppingCardAdd />
                    </Button>
                </div>
            }
        </div>
    );
}