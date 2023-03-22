import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import CartProduct from "../components/cart/cart-product";
import CartProductTotal from "../components/cart/cart-product-total";

const Cart = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <CartProduct />
        </Grid>
        <Grid item xs={4}>
          <CartProductTotal />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Cart;
