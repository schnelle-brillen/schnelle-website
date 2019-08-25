import React from "react";
import { Route, withRouter } from "react-router-dom";
import { Navbar, Icon, Button, Footer } from "./components";
import { Home, CheckoutPage, ThankYouPage, Shop } from "./container";
import { useLocalStorage } from "./hooks";
import "./index.css";

const App = ({ history }) => {
  const [basket, setBasket] = useLocalStorage("basket", { items: [] });

  return (
    <div>
      <Navbar>
        <Button className="sb-de-navbar-shop-button" onClick={()=>history.push('/shop')}>
          Shop
        </Button>
        <button
          className="sb-de-navbar-button"
          onClick={() => history.push("/basket")}
        >
          <Icon.ShoppingBasket />
          {basket.items.length > 0 && (
            <div className="sb-de-navbar-shopping-badge">
              {basket.items.length}
            </div>
          )}
        </button>
      </Navbar>
      <div className="sb-de-content">
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          path="/shop"
          render={() => (
            <Shop
              addItemToBasket={item =>
                setBasket({ ...basket, items: basket.items.concat([item]) })
              }
              selectedItems={basket.items}
            />
          )}
        />
        <Route
          path="/basket"
          render={() => (
            <CheckoutPage
              basket={basket}
              clearBasket={() => setBasket({ items: [] })}
            />
          )}
        />
        <Route
          path="/thankyou"
          render={() => <ThankYouPage basket={basket} />}
        />
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(App);