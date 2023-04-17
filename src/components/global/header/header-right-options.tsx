import { HEADER_LINKS } from "@/common/utils/constants";
import { useAppSelector } from "@/redux/hooks";
import { PersonOutlined, ShoppingBagOutlined } from "@mui/icons-material";
import { Badge, Box, IconButton, Stack } from "@mui/material";
import Link from "next/link";
import React from "react";

const HeaderRightOptions = () => {
  const cart = useAppSelector((state) => state.cart.products);

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
              borderRadius: 1200,
            }}
          >
            {cart.length}
          </Box>
        }
      >
        <IconButton
          LinkComponent={Link}
          href={HEADER_LINKS.cart.route}
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
