import React from "react";

import DeliveryTime from "@/components/checkout/delivery-time";

import { Container, Grid } from "@mui/material";

const CheckoutPage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item md={8}>
          <DeliveryTime />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
