import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, deleteFromCart } from "@/redux/slices/cartSlice";
import { Product as ProductType } from "@/common/types/product.types";
import { Add, Remove } from "@mui/icons-material";

type ProductProp = {
  product: ProductType;
};

const ProductCardButtons = (props: ProductProp) => {
  const cart = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();

  const { product } = props;

  const sameItemCount = cart.filter((item) => item._id === product._id).length;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button
        size="small"
        variant="outlined"
        aria-label="add"
        onClick={() => dispatch(addToCart(product))}
        sx={{ padding: "2px", minWidth: "unset" }}
      >
        <Add />
      </Button>

      {sameItemCount > 0 ? (
        <>
          <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
            {sameItemCount}
          </Typography>
          <Button
            onClick={() => dispatch(deleteFromCart(product._id))}
            size="small"
            variant="outlined"
            aria-label="remove"
            sx={{ padding: "2px", minWidth: "unset" }}
          >
            <Remove />
          </Button>
        </>
      ) : null}
    </Box>
  );
};

export default ProductCardButtons;
