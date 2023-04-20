import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addToCart,
  deleteFromCart,
  updateItemQuantity,
} from "@/redux/slices/cartSlice";
import { Product as ProductType } from "@/common/types/product.types";
import { Add, Remove } from "@mui/icons-material";
import { CartItem } from "@/common/types/cart.types";
import { getCartItem } from "@/common/utils/functions";

type ProductProp = {
  product: ProductType;
};

const ProductCardButtons = (props: ProductProp) => {
  const { product } = props;
  const cart = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();

  const isProductInCart = cart.map((item) => item._id).includes(product._id);
  const productInCart = cart.find((item) => item._id === product._id);

  const handleAddToCart = () => {
    const cartItem = getCartItem(product);

    if (isProductInCart && productInCart) {
      dispatch(
        updateItemQuantity({
          id: product._id,
          type: "increase",
        })
      );
    } else {
      dispatch(addToCart(cartItem));
    }
  };

  const handleDeleteFromCart = () => {
    if (isProductInCart && productInCart && productInCart.quantity > 1) {
      dispatch(
        updateItemQuantity({
          id: product._id,
          type: "decrease",
        })
      );
    } else {
      dispatch(deleteFromCart(product._id));
    }
  };

  return (
    <Stack justifyContent="flex-end" alignItems="center">
      {isProductInCart && productInCart ? (
        <>
          <Button
            onClick={handleDeleteFromCart}
            size="small"
            variant="outlined"
            aria-label="remove"
            sx={{ padding: "2px", minWidth: "unset" }}
          >
            <Remove />
          </Button>
          <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
            {productInCart.quantity}
          </Typography>
        </>
      ) : null}
      <Button
        size="small"
        variant="outlined"
        aria-label="add"
        onClick={handleAddToCart}
        sx={{ padding: "2px", minWidth: "unset" }}
      >
        <Add />
      </Button>
    </Stack>
  );
};

export default ProductCardButtons;
