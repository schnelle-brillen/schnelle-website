import React from "react";

import "./ShoppingBasketCard.css";

export default ({ basket }) => {
  return (
    <div className="sb-de-shopping-basket-card">
      <h2>Warenkorb</h2>
      <ul>
        {basket.items.map(item => (
          <li key={item.name}>
            <span>{"1x"}</span>
            <span>{item.name}</span>
            <span>{item.price.toFixed(2)}€</span>
          </li>
        ))}
      </ul>
      <hr />
      <div>
        <span>Total</span>
        <span>
          {basket.items
            .reduce((total, item) => total + item.price, 0)
            .toFixed(2)}
          €
        </span>
      </div>
    </div>
  );
};
