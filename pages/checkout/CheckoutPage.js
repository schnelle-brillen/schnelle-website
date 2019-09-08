import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import withData from "../../apollo/withData";
import { ADD_ORDER } from "../../services/mutations";
import {
  ShoppingBasketCard,
  AddressForm,
  Button,
  PaymentForm
} from "../../components";

import "./CheckoutPage.css";
import calculatePrice from "../../helpers/calculatePrice";

const CheckoutPage = ({ basket, client, clearBasket }) => {
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
  console.log(client);
  const [addOrder] = useMutation(ADD_ORDER, {
    client
  });
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
                price={calculatePrice(basket)}
                handlePaymentSuccess={paymentInfo => {
                  addOrder({
                    variables: {
                      paymentInfo: JSON.stringify(paymentInfo),
                      ...addressInformation
                    }
                  }).then(() => {
                    clearBasket();
                    document.location.href = "/thankyou";
                  });
                }}
              />
            )}
          </div>
          <div>
            <ShoppingBasketCard basket={basket} />
            <div>
              <Button onClick={() => (document.location.href = "/shop")}>
                Mehr Brillen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withData(CheckoutPage);
