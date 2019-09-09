import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import config from "../../config";

const { PAYPAL_CLIENT_ID } = config[process.env.NODE_ENV];

export default ({ price, handlePaymentSuccess }) => {
  return (
    <div>
      <PayPalButton
        amount={price}
        onSuccess={(details, data) => {
          handlePaymentSuccess(details);
        }}
        on={err => console.log(err)}
        options={{ clientId: PAYPAL_CLIENT_ID, currency: "EUR" }}
      />
    </div>
  );
};
