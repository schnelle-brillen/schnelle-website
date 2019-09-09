import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import withData from "../../apollo/withData";
import { ADD_ORDER } from "../../services/mutations";
import {
  ShoppingBasketCard,
  AddressForm,
  Button,
  PaymentForm,
  ContactForm
} from "../../components";
import { CHECKOUT_FORM_STEPS } from "../../constants";
import "./CheckoutPage.css";
import calculatePrice from "../../helpers/calculatePrice";

const CheckoutPage = ({ basket, client, clearBasket, removeItem }) => {
  const [addressInformation, setAddressInformation] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    housenr: "",
    city: "",
    zip: ""
  });
  const [formState, setFormState] = useState(0);
  const [addOrder] = useMutation(ADD_ORDER, {
    client
  });
  return (
    <div className="sb-de-basket-page">
      <div className="sb-de-checkout-page-shopping-basket">
        <div className="sb-de-checkout-page-content">
          <div className="sb-de-checkout-page-form">
            <div className="sb-de-checkout-page-form-step-wizard">
              {CHECKOUT_FORM_STEPS.map((step, i) => {
                const isDone = i < formState;

                return (
                  <span
                    className={`sb-de-checkout-page-form-step-wizard-element ${
                      i === formState
                        ? "sb-de-checkout-page-form-step-wizard-element-active"
                        : ""
                    }
              ${
                isDone
                  ? "sb-de-checkout-page-form-step-wizard-element-done"
                  : ""
              }`}
                    onClick={() => (isDone ? setFormState(i) : null)}
                  >
                    {step}
                  </span>
                );
              })}
            </div>
            {formState === 0 && (
              <>
                <ContactForm
                  setFormUpdate={setAddressInformation}
                  data={addressInformation}
                />
                <div className="sb-de-checkout-page-button-wrapper">
                  <Button inverted onClick={() => setFormState(1)}>
                    Weiter
                  </Button>
                </div>
              </>
            )}
            {formState === 1 && (
              <>
                <AddressForm
                  setFormUpdate={setAddressInformation}
                  data={addressInformation}
                />
                <div className="sb-de-checkout-page-button-wrapper">
                  <Button inverted onClick={() => setFormState(2)}>
                    Weiter
                  </Button>
                </div>
              </>
            )}

            {formState === 2 && (
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
            <ShoppingBasketCard basket={basket} removeItem={removeItem} />
            {formState < 1 && (
              <div className="sb-de-checkout-page-button-wrapper">
                <Button
                  inverted
                  onClick={() => (document.location.href = "/shop")}
                >
                  Mehr Brillen
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withData(CheckoutPage);
