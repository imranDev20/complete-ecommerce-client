import { HEADER_LINKS } from "@/common/utils/constants";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleCartDrawer } from "@/redux/slices/cartSlice";
import { PersonOutlined, ShoppingBagOutlined } from "@mui/icons-material";
import { Badge, Box, IconButton, Stack } from "@mui/material";
import Link from "next/link";
import React from "react";

const HeaderRightOptions = () => {
  const cart = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();

  const handleOpenDrawer = () => {
    dispatch(toggleCartDrawer());
  };

  return (
    <Stack spacing={2} direction="row">
      <IconButton
        sx={{
          backgroundColor: "#f3f5f9",
        }}
      >
        <PersonOutlined />
      </IconButton>

      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        badgeContent={
          <Box
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              p: 0.5,
              width: 20,
              height: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 1200,
              fontSize: 11,
            }}
          >
            {/* {cart.length > 0 ? getUniqueItems(cart)?.length : 0} */}
          </Box>
        }
      >
        <IconButton
          // LinkComponent={Link}
          // href={HEADER_LINKS.cart.route}
          onClick={handleOpenDrawer}
          sx={{
            backgroundColor: "#f3f5f9",
          }}
        >
          <ShoppingBagOutlined />
        </IconButton>
      </Badge>
    </Stack>
  );
};

export default HeaderRightOptions;
