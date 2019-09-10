import React from "react";

import useLocalStorage from "../../hooks/useLocalStorage";
import { Navbar, Icon, Button, Footer } from "../../components";

function PageWrapper({ Component, ...pageProps }) {
  const initialBasket = { items: [] };
  const [basket, setBasket] = useLocalStorage("basket", initialBasket);

  return (
    <div>
      <Navbar>
        <Button
          className="sb-de-navbar-shop-button"
          onClick={() => {
            document.location.href = "/shop";
          }}
        >
          Shop
        </Button>
        {basket && basket.items.length > 0 && (
          <div
            className="sb-de-navbar-button"
            onClick={() => {
              document.location.href = "/checkout";
            }}
          >
            <Icon.ShoppingBasket />
            <div className="sb-de-navbar-shopping-badge">
              {basket.items.length}
            </div>
          </div>
        )}
      </Navbar>
      <div className="sb-de-content">
        <Component
          {...pageProps}
          basket={basket}
          setBasket={setBasket}
          clearBasket={() => setBasket(initialBasket)}
          addItemToBasket={item =>
            setBasket({ ...basket, items: basket.items.concat([item]) })
          }
          removeItem={pos => {
            setBasket({ ...basket, item: basket.items.splice(pos) });
          }}
        />
      </div>
      <Footer />
    </div>
  );
}

export default PageWrapper;
