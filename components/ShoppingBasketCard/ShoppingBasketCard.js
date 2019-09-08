import React from "react";

import "./ShoppingBasketCard.css";
import calculatePrice from "../../helpers/calculatePrice";

export default ({ basket }) => {
  return (
    <div className="sb-de-shopping-basket-card">
      <h2>Warenkorb</h2>
      <ul>
        {basket &&
          basket.items.map(item => (
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
        <span>{calculatePrice(basket)}€</span>
      </div>
    </div>
  );
};
