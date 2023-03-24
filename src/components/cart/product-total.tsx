import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CartProductTotal = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Card sx={{ marginBottom: "24px" }}>
      <CardContent sx={{ padding: "24px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <Typography>Total</Typography>
          <Typography>$460.00</Typography>
        </Box>
        <Divider sx={{ marginBottom: "16px" }} />
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
        >
          <Typography
            sx={{ fontSize: "14px", fontWeight: 600, color: "#2b3445" }}
          >
            Additional Comments
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              paddingX: "12px",
              paddingY: "5px",
              borderRadius: "4px",
              color: "#4e97fd",
              backgroundColor: "#e9f2fc",
              marginLeft: "6px",
            }}
          >
            Note
          </Typography>
        </Box>
        <Box sx={{ marginBottom: "16px" }}>
          <FormControl fullWidth>
            <TextField
              id="standard-multiline-flexible"
              multiline
              rows={5}
              variant="outlined"
              size="small"
            />
          </FormControl>
        </Box>
        <Divider sx={{ marginBottom: "16px" }} />
        <Box sx={{ marginBottom: "16px" }}>
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Voucher"
              placeholder="Voucher"
              multiline
              variant="outlined"
              size="small"
            />
          </FormControl>
        </Box>
        <Button sx={{ marginBottom: "32px" }} fullWidth variant="outlined">
          Apply Voucher
        </Button>
        <Divider sx={{ marginBottom: "16px" }} />
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#2b3445",
              marginBottom: "16px",
            }}
          >
            Shipping Estimates
          </Typography>
          <FormControl fullWidth size="small" sx={{ marginBottom: "16px" }}>
            <InputLabel>Select Country</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Select Country"
              onChange={handleChange}
            >
              <MenuItem value={2019}>January</MenuItem>
              <MenuItem value={2020}>February</MenuItem>
              <MenuItem value={2021}>March</MenuItem>
              <MenuItem value={2022}>April</MenuItem>
              <MenuItem value={2023}>May</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small" sx={{ marginBottom: "16px" }}>
            <InputLabel>State</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="State"
              onChange={handleChange}
            >
              <MenuItem value={2019}>New York</MenuItem>
              <MenuItem value={2020}>Dhaka</MenuItem>
              <MenuItem value={2021}>Paris</MenuItem>
              <MenuItem value={2022}>London</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small" sx={{ marginBottom: "16px" }}>
            <TextField
              id="outlined-basic"
              label="Zip Code"
              placeholder="Zip Code"
              multiline
              variant="outlined"
              size="small"
            />
          </FormControl>
          <Button sx={{ marginBottom: "16px" }} fullWidth variant="outlined">
            Calculate Shipping
          </Button>
          <Button sx={{ marginBottom: "16px" }} fullWidth variant="contained">
            Checkout Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartProductTotal;
