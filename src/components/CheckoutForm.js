import { CardElement } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import "../App.css";

const CheckoutForm = () => {
  const [isPaymentLoading, setIspaymentLoading] = useState(false);
  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <form style={{ display: "block", width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardElement
              className="card"
              options={{
                style: { base: { backgroundColor: "white" } },
              }}
            />
            <button className="pay-button" disabled={isPaymentLoading}>
              Pay now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
