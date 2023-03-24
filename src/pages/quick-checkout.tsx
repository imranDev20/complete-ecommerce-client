import React from "react";
import { Container, Grid } from "@mui/material";
import DeliveryTime from "@/components/quick-checkout/delivery-time";
import CheckoutOrder from "@/components/quick-checkout/checkout-order";
import DeliveryAddress from "@/components/quick-checkout/delivery-address";
import PaymentDetails from "@/components/quick-checkout/payment-details";

const CheckoutPage = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4, marginBottom: 4 }}>
      <Grid container spacing={4}>
        <Grid item md={8}>
          <DeliveryTime />
          <DeliveryAddress />
          <PaymentDetails />
        </Grid>
        <Grid item md={4}>
          <CheckoutOrder />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
