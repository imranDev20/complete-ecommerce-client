import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "./product-card";
import { Products as ProductsTypes } from "@/common/types/product.types";

type ProductsProps = {
  products: ProductsTypes;
};

const Products = ({ products }: ProductsProps) => {
  // const products: Products = [
  //   {
  //     id: 1,
  //     name: "Mi Led Smart Watch",
  //     image:
  //       "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=1920&q=75",
  //     offerPrice: "$142.20",
  //     discountPrice: "$180.00",
  //   },
  //   {
  //     id: 2,
  //     name: "Classic Rolex Watch",
  //     image:
  //       "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=1920&q=75",
  //     offerPrice: "$297.50",
  //     discountPrice: "$350.00",
  //   },
  //   {
  //     id: 3,
  //     name: "Iphone 13 Pro Max",
  //     image:
  //       "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=1920&q=75",
  //     offerPrice: "$108.00",
  //     discountPrice: "$150.00",
  //   },
  //   {
  //     id: 4,
  //     name: "Mi Led Smart Watch",
  //     image:
  //       "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=1920&q=75",
  //     offerPrice: "$142.20",
  //     discountPrice: "$180.00",
  //   },
  //   {
  //     id: 5,
  //     name: "Classic Rolex Watch",
  //     image:
  //       "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=1920&q=75",
  //     offerPrice: "$297.50",
  //     discountPrice: "$350.00",
  //   },
  //   {
  //     id: 6,
  //     name: "Iphone 13 Pro Max",
  //     image:
  //       "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=1920&q=75",
  //     offerPrice: "$108.00",
  //     discountPrice: "$150.00",
  //   },
  // ];

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
