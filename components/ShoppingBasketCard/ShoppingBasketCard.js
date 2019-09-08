import React from "react";

import calculatePrice from "../../helpers/calculatePrice";
import { Card, Button, Icon } from "../../components";

import "./ShoppingBasketCard.css";

export default ({ basket, removeItem }) => {
  const oneOrLessItems = basket && basket.items && basket.items.length <= 1;

  return (
    <Card className="sb-de-shopping-basket-card">
      <h2>Warenkorb</h2>
      <ul>
        {basket &&
          basket.items.map((item, i) => (
            <li key={item.name}>
              <span className="sb-de-shopping-basket-card-item-remove-button">
                <Button
                  onClick={() => {
                    removeItem(i);
                    if (oneOrLessItems) {
                      document.location.href = "/shop";
                    }
                  }}
                  styled={false}
                  hover={false}
                >
                  <Icon.Clear />
                </Button>
              </span>
              <span>{"1x"}</span>
              <span>{item.name}</span>
              <span>{item.price.toFixed(2)}€</span>
            </li>
          ))}
      </ul>
      <div>
        <span>Total</span>
        <span>{calculatePrice(basket)}€</span>
      </div>
    </Card>
  );
};
