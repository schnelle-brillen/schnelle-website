import React from "react";
import { contentURL } from "../../constants";
import { Button, Icon } from "../../components";

import "./GlassCard.css";
export default props => {
  const { glass, onClick } = props;

  return (
    <div className="sb-de-glass-card">
      <div className="sb-de-glass-card-content">
        <h1>{glass.name}</h1>
        <img
          src={contentURL + glass.image.url}
          alt={`The famous glasses ${glass.name}`}
        />
        <div className="sb-de-glass-card-content-information">
          <h2>{`Highspeed: ${glass.speed} km/h`}</h2>
          <h2>{`Preis: ${glass.price.toFixed(2)}€`}</h2>
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
