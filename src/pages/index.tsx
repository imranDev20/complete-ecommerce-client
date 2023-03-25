import * as React from "react";
import type { NextPage } from "next";
import Hero from "../components/home/hero";
import Product from "@/components/products/products";
import { Container, Grid } from "@mui/material";
import ProductMenu from "@/components/products/product-menu";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Container>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <ProductMenu />
          </Grid>
          <Grid item md={9}>
            <Product />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
