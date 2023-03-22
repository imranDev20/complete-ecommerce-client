import React from "react";
import { Container, Grid } from "@mui/material";
import CartCheckoutPayment from "../components/cart-payment/cart-checkout-payment";
import PlaceorderCheckoutButton from "../components/cart-payment/placeorder-checkout-button";
import CartPaymentTotal from "../components/cart-payment/cart-payment-total";

const CartPayment = () => {
  const [showPayment1Card, setShowPayment1Card] = React.useState(false);
  const [showPayment2Card, setShowPayment2Card] = React.useState(false);
  const handleCard1 = () => {
    setShowPayment1Card((e) => !e);
    setShowPayment2Card(false);
  };
  const handleCard2 = () => {
    setShowPayment2Card((e) => !e);
    setShowPayment1Card(false);
  };
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <CartCheckoutPayment
            handleCard1={handleCard1}
            handleCard2={handleCard2}
            showPayment1Card={showPayment1Card}
            showPayment2Card={showPayment2Card}
          />
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
