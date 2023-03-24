import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

const CartBillingAddress = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const [billingAddress, setBillingAddress] = React.useState(true);
  return (
    <Card sx={{ p: 1, marginBottom: "24px" }}>
      <CardContent>
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "16px",
              color: "#2b3445",
            }}
          >
            Billing Address
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "-11px",
            marginBottom: "16px",
          }}
        >
          <Checkbox onClick={() => setBillingAddress(!billingAddress)} />
          <Typography
            sx={{ fontSize: "14px", fontWeight: 400, color: "#2b3445" }}
          >
            Same as shipping address
          </Typography>
        </Box>
        {billingAddress && (
          <Grid container spacing={3}>
            <Grid item md={6}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Full Name"
                  variant="outlined"
                  size="small"
                />
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                  size="small"
                />
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  size="small"
                />
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Company"
                  variant="outlined"
                  size="small"
                />
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  type="number"
                  label="Zip Code"
                  variant="outlined"
                  size="small"
                />
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth size="small">
                <InputLabel>Country</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  multiline
                  value={age}
                  label="Country"
                  onChange={handleChange}
                >
                  <MenuItem value={2019}>New York</MenuItem>
                  <MenuItem value={2020}>Dhaka</MenuItem>
                  <MenuItem value={2021}>Paris</MenuItem>
                  <MenuItem value={2022}>London</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Address 1"
                  variant="outlined"
                  size="small"
                />
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Address 2"
                  variant="outlined"
                  size="small"
                />
              </FormControl>
            </Grid>
          </Grid>
        )}
      </CardContent>
    </Card>
  );
};

export default CartBillingAddress;
