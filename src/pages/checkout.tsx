import { Container, Grid } from "@mui/material";
import React from "react";
import CartShippingAddress from "../components/checkout/shipping-address";
import CartBillingAddress from "../components/checkout/billing-address";
import PaymentBackButton from "../components/checkout/payment-back-button";
import CartCheckoutTotal from "../components/checkout/checkout-total";

const CartCheckout = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <CartShippingAddress />
          <CartBillingAddress />
          <PaymentBackButton />
        </Grid>
        <Grid item xs={4}>
          <CartCheckoutTotal />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartCheckout;
