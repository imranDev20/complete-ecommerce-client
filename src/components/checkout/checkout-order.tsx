import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const CheckoutOrder = () => {
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
          color: "#2b3445",
        }}
      >
        <Typography sx={{ fontSize: "14px" }}>1 x iPhone 12</Typography>
        <Typography sx={{ fontSize: "14px" }}>$999.00</Typography>
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
        <Typography sx={{ fontSize: "14px" }}>1 x iPhone 12 pro</Typography>
        <Typography sx={{ fontSize: "14px" }}>$1,199.00</Typography>
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
        <Typography sx={{ fontSize: "14px" }}>1 x iPhone 12 pro max</Typography>
        <Typography sx={{ fontSize: "14px" }}>$1,299.00</Typography>
      </Box>
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
