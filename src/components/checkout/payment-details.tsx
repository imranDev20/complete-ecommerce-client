import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";

const PaymentDetails = () => {
  return (
    <Card sx={{ marginTop: 3, p: 1 }}>
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
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="Expire Card Month"
                variant="outlined"
                size="small"
              />
            </FormControl>
          </Grid>
          <Grid item md={4}>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="Expire Card Year"
                variant="outlined"
                size="small"
              />
            </FormControl>
          </Grid>
          <Grid item md={4}>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="CVC/CVV"
                variant="outlined"
                size="small"
              />
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PaymentDetails;
