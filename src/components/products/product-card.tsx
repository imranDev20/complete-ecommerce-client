import React from "react";
import { Box, Card, CardContent, Rating, Typography } from "@mui/material";
import { slugifyTitle } from "@/common/utils/functions";
import { Product as ProductType } from "@/common/types/product.types";
import Link from "next/link";
import Image from "next/image";

import ProductCardButtons from "./product-card-buttons";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const slug = slugifyTitle(product.name);

  return (
    <Card sx={{ p: 0, position: "relative" }}>
      <Link href={`/products/${slug}-${product._id}`}>
        <Box sx={{ height: 283, position: "relative" }}>
          <Image src={product.image} alt={product.name} fill quality={100} />
        </Box>
      </Link>

      <Typography
        sx={{
          position: "absolute",
          top: "10px",
          left: "10px",
          fontSize: "10px",
          paddingX: "10px",
          paddingY: "4px",
          backgroundColor: "#4E97FD",
          color: "white",
          borderRadius: "16px",
          fontWeight: 600,
        }}
      >
        25% off
      </Typography>

      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              mb: 1,
            }}
          >
            {product.name}
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              mb: 1,
            }}
          >
            <Rating
              size="small"
              name="read-only"
              value={product.rating}
              precision={0.1}
              readOnly
            />
            <Box sx={{ ml: 0.5 }}>({product.rating})</Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "4px",
            }}
          >
            <Typography
              sx={{
                color: "#4E97FD",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              US{product.offerPrice}
            </Typography>
            <Typography
              sx={{
                color: "#7d879c",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "line-through",
              }}
            >
              {product.regularPrice}
            </Typography>
          </Box>
        </Box>

        <ProductCardButtons product={product} />
      </CardContent>
    </Card>
  );
};

export default ProductCard;
