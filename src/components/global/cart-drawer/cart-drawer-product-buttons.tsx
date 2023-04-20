import { CartItem } from "@/common/types/cart.types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, deleteFromCart } from "@/redux/slices/cartSlice";
import { Add, Remove } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import React from "react";

type ProductButtonPropsType = {
  cartItem: CartItem;
};

const CartDrawerProductButtons = ({ cartItem }: ProductButtonPropsType) => {
  const cart = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();

  return (
    <Stack spacing={1} sx={{ mr: 1 }} alignItems="center">
      <IconButton
        onClick={() => dispatch(addToCart(cartItem))}
        sx={{
          border: "1px solid rgb(227, 233, 239)",
          p: 0.5,
          width: "28px",
          height: "28px",
        }}
      >
        <Add sx={{ fontSize: 15, color: "primary.main" }} />
      </IconButton>
      <Box></Box>
      <IconButton
        onClick={() => dispatch(deleteFromCart(cartItem._id))}
        sx={{
          border: "1px solid rgb(227, 233, 239)",
          p: 0.5,
          width: "28px",
          height: "28px",
        }}
      >
        <Remove sx={{ fontSize: 15, color: "primary.main" }} />
      </IconButton>
    </Stack>
  );
};

export default CartDrawerProductButtons;
