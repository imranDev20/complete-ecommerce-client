import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Close, LocalMallOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import CartDrawerProduct from "./cart-drawer-product";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleCartDrawer } from "@/redux/slices/cartSlice";

export default function CartDrawer() {
  const cart = useAppSelector((state) => state.cart.cartItems);
  const drawerOpen = useAppSelector((state) => state.cart.drawerOpen);
  const dispatch = useAppDispatch();

  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={() => dispatch(toggleCartDrawer())}
    >
      <Box sx={{ width: 350 }} role="presentation">
        <List disablePadding>
          <ListItem
            disablePadding
            sx={{ px: 3 }}
            secondaryAction={
              <IconButton onClick={() => dispatch(toggleCartDrawer())}>
                <Close />
              </IconButton>
            }
          >
            <ListItemIcon
              sx={{
                minWidth: "unset",
                mr: 1,
                py: 2,
              }}
            >
              <LocalMallOutlined />
            </ListItemIcon>
            <ListItemText primary={`3 items`} />
          </ListItem>
          <Divider
            sx={{
              borderBottom: "1px solid rgb(227, 233, 239)",
            }}
          />

          {cart && cart.length > 0
            ? cart.map((cartItem) => (
                <CartDrawerProduct key={cartItem._id} cartItem={cartItem} />
              ))
            : null}
        </List>
      </Box>
    </Drawer>
  );
}
