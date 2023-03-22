import React from "react";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";

const CartPaymentTotal = () => {
  return (
    <Card sx={{ marginBottom: "24px" }}>
      <CardContent sx={{ padding: "24px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <Typography
            sx={{ fontSize: "14px", fontWeight: 400, color: "#7d879c" }}
          >
            Subtotal:
          </Typography>
          <Typography
            sx={{ fontSize: "18px", fontWeight: 600, color: "#2b3445" }}
          >
            $2,610.00
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <Typography
            sx={{ fontSize: "14px", fontWeight: 400, color: "#7d879c" }}
          >
            Shipping:
          </Typography>
          <Typography
            sx={{ fontSize: "18px", fontWeight: 600, color: "#2b3445" }}
          >
            $0.00
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <Typography
            sx={{ fontSize: "14px", fontWeight: 400, color: "#7d879c" }}
          >
            Tax
          </Typography>
          <Typography
            sx={{ fontSize: "18px", fontWeight: 600, color: "#2b3445" }}
          >
            $40.00
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <Typography
            sx={{ fontSize: "14px", fontWeight: 400, color: "#7d879c" }}
          >
            Discount
          </Typography>
          <Typography
            sx={{ fontSize: "18px", fontWeight: 600, color: "#2b3445" }}
          >
            $0.00
          </Typography>
        </Box>
        <Divider sx={{ marginBottom: "16px" }} />
        <Box
          sx={{
            textAlign: "right",
          }}
        >
          <Typography sx={{ fontSize: "25px", fontWeight: 600 }}>
            $2,610.00
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartPaymentTotal;
