import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";

const Cart = () => {
  const stripe = loadStripe(
    "pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
  );
  return (
    <div>
      <div className="row text-center">
        <h3 className="mt-4">Checkout now</h3>
      </div>
      <Elements stripe={stripe}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Cart;
