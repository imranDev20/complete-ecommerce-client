import { Box, Typography } from "@mui/material";
import React from "react";

const ProductDescription = () => {
  return (
    <Box sx={{ marginBottom: "48px" }}>
      <Box>
        <Typography
          sx={{ fontSize: "20px", marginBottom: "16px", fontWeight: 700 }}
        >
          Specification:
        </Typography>
        <Box>
          <Typography sx={{ fontSize: "14px" }}>Brand: Beats</Typography>
          <Typography sx={{ fontSize: "14px" }}>Model: S450</Typography>
          <Typography sx={{ fontSize: "14px" }}>
            Wireless Bluetooth Headset
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            FM Frequency Response: 87.5 - 108 MHz
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            Feature: FM Radio, Card Supported (Micro SD / TF)
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>Made in China</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDescription;
