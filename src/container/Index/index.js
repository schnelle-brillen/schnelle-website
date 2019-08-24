import React, { useState } from "react";
import { Navbar, Icon } from "../../components";
import { Home, CheckoutPage, ThankYouPage } from "..";
import { useLocalStorage } from "../../hooks";
import { PAGES } from '../../constants';
import "./index.css";

export default () => {
  const [basket, setBasket] = useLocalStorage("basket", { items: [] });
  const [page, setPage] = useState(PAGES.HOME);

  return (
    <div>
      <Navbar toIndexPage={() => setPage(PAGES.HOME)}>
        <button
          className="sb-de-navbar-button"
          onClick={() => setPage(PAGES.CHECKOUT_PAGE)}
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
        {page === PAGES.HOME && (
          <Home
            addItemToBasket={item =>
              setBasket({ ...basket, items: basket.items.concat([item]) })
            }
            selectedItems={basket.items}
          />
        )}
        {page === PAGES.CHECKOUT_PAGE && (
          <CheckoutPage basket={basket} setPage={setPage} clearBasket={()=>setBasket({items:[]})}/>
        )}
        {page === PAGES.THANK_YOU && <ThankYouPage basket={basket} setPage={setPage}/>}
      </div>
    </div>
  );
};
