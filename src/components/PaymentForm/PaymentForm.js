import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { Card } from "..";
import config from "../../config";

const { PAYPAL_CLIENT_ID } = config[process.env.NODE_ENV];

export default ({ price, handlePaymentSuccess }) => {
  return (
    <Card>
      <PayPalButton
        amount={price}
        onSuccess={(details, data) => {
          console.log(details);
          handlePaymentSuccess(details);
        }}
        on={(err)=>console.log(err)}
        options={{ clientId: PAYPAL_CLIENT_ID, currency: "EUR" }}
      />
    </Card>
  );
};
