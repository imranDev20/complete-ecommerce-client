import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Add, Close, Remove } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import CartDrawerProductButtons from "./cart-drawer-product-buttons";
import { CartItem } from "@/common/types/cart.types";

type CartDrawerProductProps = {
  cartItem: CartItem;
};

const CartDrawerProduct = ({ cartItem }: CartDrawerProductProps) => {
  const cart = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();

  return (
    <>
      <ListItem
        key={cartItem._id}
        disablePadding
        sx={{ px: 3, py: 1.7 }}
        secondaryAction={
          <IconButton aria-label="comment">
            <Close sx={{ fontSize: 16 }} />
          </IconButton>
        }
      >
        <CartDrawerProductButtons cartItem={cartItem} />
        <Box>
          <ListItemText
            primary={cartItem.name}
            secondaryTypographyProps={{
              fontSize: 12,
              my: 0.5,
            }}
          />
          <Typography sx={{ fontSize: 12, my: 1 }}>$</Typography>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: "primary.main",
            }}
          >
            $
          </Typography>
        </Box>
      </ListItem>
      <Divider
        sx={{
          borderBottom: "1px solid rgb(227, 233, 239)",
        }}
      />
    </>
  );
};

export default CartDrawerProduct;
