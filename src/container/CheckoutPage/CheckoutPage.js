import React, { useState } from "react";
import { withApollo } from "react-apollo";
import { useMutation } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";
import { ADD_ORDER } from "../../services/mutations/";
import {
  ShoppingBasketCard,
  AddressForm,
  Button,
  PaymentForm
} from "../../components";

import "./CheckoutPage.css";

const CheckoutPage = ({ basket, client, clearBasket, history }) => {
  const [formState, setFormState] = useState(0);
  const [addressInformation, setAddressInformation] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    housenr: "",
    city: "",
    zip: ""
  });
  const [addOrder] = useMutation(ADD_ORDER, { client });

  return (
    <div className="sb-de-basket-page">
      <div className="sb-de-checkout-page-shopping-basket">
        <div className="sb-de-checkout-page-content">
          <div className="sb-de-checkout-page-form">
            {formState === 0 && (
              <>
                <AddressForm
                  setFormUpdate={setAddressInformation}
                  data={addressInformation}
                />
                <div>
                  <Button onClick={() => setFormState(1)}>Weiter</Button>
                </div>
              </>
            )}
            {formState === 1 && (
              <PaymentForm
                price={basket.items
                  .reduce((total, item) => total + item.price, 0)
                  .toFixed(2)}
                handlePaymentSuccess={paymentInfo => {
                  addOrder({
                    variables: {
                      paymentInfo: JSON.stringify(paymentInfo),
                      ...addressInformation
                    }
                  });
                  history.push('/thankyou')
                  clearBasket();
                }}
              />
            )}
          </div>
          <div>
            <ShoppingBasketCard basket={basket} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withApollo(withRouter(CheckoutPage));
