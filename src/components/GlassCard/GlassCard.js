import React from "react";
import { Button, Icon } from "../../components";

import "./GlassCard.css";

export default ({ img, name, speed, price, onClick }) => {
  return (
    <div className="sb-de-glass-card">
      <div className="sb-de-glass-card-content">
        <h1>{name}</h1>
        <img src={img} alt={`The famous glasses ${name}`} />
        <div className="sb-de-glass-card-content-information">
          <h2>{`Highspeed: ${speed} km/h`}</h2>
          <h2>{`Preis: ${price.toFixed(2)}€`}</h2>
        </div>
      </div>
      {
        <div className="sb-de-glass-card-buttons">
          <Button
            className="sb-de-glass-shopping-card-button"
            onClick={onClick}
          >
            <Icon.ShoppingCardAdd />
          </Button>
        </div>
      }
    </div>
  );
};
