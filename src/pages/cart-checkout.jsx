import { Container, Grid } from "@mui/material";
import React from "react";
import CartShippingAddress from "../components/cart-checkout/cart-shipping-address";
import CartBillingAddress from "../components/cart-checkout/cart-billing-address";
import PaymentBackButton from "../components/cart-checkout/payment-back-button";
import CartCheckoutTotal from "../components/cart-checkout/cart-checkout-total";

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
