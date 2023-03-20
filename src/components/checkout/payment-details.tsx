import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const PaymentDetails = () => {
  const [age, setAge] = React.useState("");
  const [showVoucher, setShowVoucher] = React.useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Card sx={{ marginTop: 3 }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            sx={{
              backgroundColor: "primary.main",
              width: 30,
              height: 30,
              mr: 1,
            }}
          >
            3
          </Avatar>
          <Typography sx={{ fontSize: 20 }} component="h3">
            Payment Details
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ marginTop: 3 }}>
          <Grid item md={6}>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="Enter Your Name"
                variant="outlined"
                size="small"
              />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="Enter Your Card Number"
                variant="outlined"
                size="small"
              />
            </FormControl>
          </Grid>
          <Grid item md={4}>
            <FormControl fullWidth size="small">
              <InputLabel>Expire Card Month</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Expire Card Month"
                onChange={handleChange}
              >
                <MenuItem value={2019}>January</MenuItem>
                <MenuItem value={2020}>February</MenuItem>
                <MenuItem value={2021}>March</MenuItem>
                <MenuItem value={2022}>April</MenuItem>
                <MenuItem value={2023}>May</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={4}>
            <FormControl fullWidth size="small">
              <InputLabel>Expire Card Year</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Expire Card Year"
                onChange={handleChange}
              >
                <MenuItem value={2019}>2019</MenuItem>
                <MenuItem value={2020}>2020</MenuItem>
                <MenuItem value={2021}>2021</MenuItem>
                <MenuItem value={2022}>2022</MenuItem>
                <MenuItem value={2023}>2023</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={4}>
            <FormControl fullWidth size="small">
              <InputLabel>CVC/CVV</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="CVC/CVV"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: 1,
            marginBottom: "12px",
          }}
        >
          <Checkbox {...label} />
          <Typography
            sx={{ fontSize: "14px", fontWeight: 400, color: "#2b3445" }}
          >
            Save this card
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              marginBottom: "12px",
              color: "#2b3445",
            }}
          >
            Saves Cards
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={4}>
              <Box
                sx={{
                  backgroundColor: "#f6f9fc",
                  padding: 2,
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                <Avatar
                  alt="amex card"
                  src="../../images/Amex.svg"
                  sx={{ width: 32, height: 28 }}
                  variant="square"
                />
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#4b566b",
                  }}
                  variant="subtitle1"
                >
                  **** **** **** 4765
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#4b566b",
                  }}
                  variant="subtitle1"
                >
                  Jaslynn Land
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box
                sx={{
                  backgroundColor: "#f6f9fc",
                  padding: 2,
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                <Avatar
                  alt="mastercard"
                  src="../../images/Mastercard.svg"
                  sx={{ width: 32, height: 28 }}
                  variant="square"
                />
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#4b566b",
                  }}
                  variant="subtitle1"
                >
                  **** **** **** 5432
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#4b566b",
                  }}
                  variant="subtitle1"
                >
                  Jaslynn Land
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box
                sx={{
                  backgroundColor: "#f6f9fc",
                  padding: 2,
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                <Avatar
                  alt="visa"
                  src="../../images/Visa.svg"
                  sx={{ width: 32, height: 28 }}
                  variant="square"
                ></Avatar>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#4b566b",
                  }}
                  variant="subtitle1"
                >
                  **** **** **** 4543
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#4b566b",
                  }}
                  variant="subtitle1"
                >
                  Jaslynn Land
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box>
            <Button
              onClick={() => setShowVoucher(!showVoucher)}
              size="small"
              sx={{ marginTop: "12px" }}
            >
              I Have A Voucher
            </Button>
            {showVoucher && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <Grid item md={6}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Enter voucher code here"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Button sx={{ marginLeft: "16px" }} variant="contained">
                  Apply
                </Button>
              </Box>
            )}
            <Button sx={{ marginTop: "12px" }} fullWidth variant="contained">
              Place Order
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PaymentDetails;
