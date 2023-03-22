import React from "react";
import {
  Box,
  Card,
  CardContent,
  SelectChangeEvent,
  Typography,
  Checkbox,
  Divider,
  FormControl,
  Grid,
  TextField,
  Button,
} from "@mui/material";

const CartCheckoutPayment = ({
  handleCard1,
  handleCard2,
  showPayment1Card,
  showPayment2Card,
}: any) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Card sx={{ marginBottom: "24px" }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "-11px",
            marginBottom: "24px",
          }}
        >
          <Checkbox
            checked={showPayment1Card}
            onClick={handleCard1}
            size="small"
          />
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#2b3445",
            }}
          >
            Pay with credit card
          </Typography>
        </Box>
        <Divider sx={{ marginBottom: "24px" }} />
        {showPayment1Card && (
          <Grid container spacing={3}>
            <Grid item md={6}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Card Number"
                  variant="outlined"
                  size="small"
                />
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Exp Date"
                  variant="outlined"
                  size="small"
                />
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Name on Card"
                  variant="outlined"
                  size="small"
                />
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Name on Card"
                  variant="outlined"
                  size="small"
                />
              </FormControl>
            </Grid>
            <Grid item md={6} sx={{ marginBottom: "24px" }}>
              <Button variant="outlined">Submit</Button>
            </Grid>
          </Grid>
        )}
        {/* <Divider sx={{ marginBottom: "24px" }} /> */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "-11px",
            marginBottom: "24px",
          }}
        >
          <Checkbox
            checked={showPayment2Card}
            onClick={handleCard2}
            size="small"
          />
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#2b3445",
            }}
          >
            Pay with Paypal
          </Typography>
        </Box>
        {showPayment2Card && (
          <Grid
            container
            spacing={3}
            sx={{
              marginBottom: "32px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid item md={10}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Card Number"
                  variant="outlined"
                  size="small"
                />
              </FormControl>
            </Grid>
            <Grid item md={2}>
              <Button variant="outlined">Submit</Button>
            </Grid>
          </Grid>
        )}
        <Divider sx={{ marginBottom: "24px" }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "-11px",
          }}
        >
          <Checkbox size="small" />
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#2b3445",
            }}
          >
            Cash on Delivery
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartCheckoutPayment;
