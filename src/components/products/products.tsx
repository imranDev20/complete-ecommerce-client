import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "./product-card";
import { Products as ProductsTypes } from "@/common/types/product.types";

type ProductsProps = {
  products: ProductsTypes;
};

const Products = ({ products }: ProductsProps) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid key={product._id} item md={4}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
