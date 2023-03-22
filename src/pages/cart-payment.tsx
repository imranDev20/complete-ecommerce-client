import React from "react";
import { Container, Grid } from "@mui/material";
import CartCheckoutPayment from "../components/cart-payment/cart-checkout-payment";
import PlaceorderCheckoutButton from "../components/cart-payment/placeorder-checkout-button";
import CartPaymentTotal from "../components/cart-payment/cart-payment-total";

const CartPayment = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <CartCheckoutPayment />
          <PlaceorderCheckoutButton />
        </Grid>
        <Grid item xs={4}>
          <CartPaymentTotal />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartPayment;
