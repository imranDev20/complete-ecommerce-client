import * as React from "react";
import type { NextPage } from "next";

import Hero from "@/components/home/hero";
import ProductMenu from "@/components/products/product-menu";
import Products from "@/components/products/products";

import { Container, Grid } from "@mui/material";
import { getProducts } from "@/services/product-services";
import { Products as ProductsType } from "@/common/types/product.types";

type ProductsProps = {
  products: ProductsType;
};

const HomePage: NextPage<ProductsProps> = ({ products }: ProductsProps) => {
  return (
    <>
      <Hero />
      <Container>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <ProductMenu />
          </Grid>
          <Grid item md={9}>
            <Products products={products} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  try {
    const products = await getProducts();

    if (products.data.success) {
      return {
        props: {
          products: products.data.data,
        },
      };
    } else {
      throw new Error();
    }
  } catch (err) {
    console.log(err);
  }
};
