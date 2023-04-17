import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const CheckoutOrder = () => {
  const cart = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();

  console.log(cart);

  const uniqueProducts = cart.filter(
    (value, index, self) => index === self.findIndex((t) => t._id === value._id)
  );

  const calculateTotal = () => {};

  return (
    <Box>
      <Typography
        sx={{
          fontSize: "14px",
          marginBottom: "16px",
          fontWeight: 700,
          color: "#0c0e30",
        }}
      >
        Your order
      </Typography>
      {uniqueProducts.map((product) => {
        const sameItemCount = cart.filter(
          (item) => item._id === product._id
        ).length;

        return (
          <Box
            key={product._id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
              color: "#2b3445",
            }}
          >
            <Typography sx={{ fontSize: "14px" }}>
              {sameItemCount} x {product.name}
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              ${product.offerPrice ? product.offerPrice : product.regularPrice}
            </Typography>
          </Box>
        );
      })}

      <Divider sx={{ marginY: "24px" }} />
      {/* order total Calculate  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
          color: "#2b3445",
        }}
      >
        <Typography sx={{ fontSize: "14px" }}>Subtotal:</Typography>
        <Typography
          sx={{ fontSize: "14px", fontWeight: 700, color: "#2b3445" }}
        >
          $2,610.00
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
          color: "#2b3445",
        }}
      >
        <Typography sx={{ fontSize: "14px" }}>Shipping:</Typography>
        <Typography
          sx={{ fontSize: "14px", fontWeight: 700, color: "#2b3445" }}
        >
          -
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
          color: "#2b3445",
        }}
      >
        <Typography sx={{ fontSize: "14px" }}>Tax:</Typography>
        <Typography
          sx={{ fontSize: "14px", fontWeight: 700, color: "#2b3445" }}
        >
          $40.00
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
          color: "#2b3445",
        }}
      >
        <Typography sx={{ fontSize: "14px" }}>Discount:</Typography>
        <Typography
          sx={{ fontSize: "14px", fontWeight: 700, color: "#2b3445" }}
        >
          -
        </Typography>
      </Box>
      <Divider sx={{ marginY: "24px" }} />
      {/* order total money  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
          color: "#2b3445",
        }}
      >
        <Typography
          sx={{ fontSize: "14px", fontWeight: 700, color: "#2b3445" }}
        >
          Total:
        </Typography>
        <Typography
          sx={{ fontSize: "14px", fontWeight: 700, color: "#2b3445" }}
        >
          $2,650.00
        </Typography>
      </Box>
    </Box>
  );
};

export default CheckoutOrder;
