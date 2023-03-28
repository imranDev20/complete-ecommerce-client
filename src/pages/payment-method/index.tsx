import ProfileSidebar from "@/components/shared/profile-sidebar";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Pagination,
  Typography,
} from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddPayment from "@/components/profile/add-payment";

const PaymentMethod = () => {
  const [showPayment, setShowPayment] = React.useState(false);

  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const payments = [
    {
      id: "1",
      name: "Ralf Edward",
      image: "https://bazaar.ui-lib.com/assets/images/payment-methods/Amex.svg",
      number: "1234 **** **** ****",
      date: "08 / 2022",
    },
    {
      id: "2",
      name: "Ralf Edward",
      image:
        "https://bazaar.ui-lib.com/assets/images/payment-methods/Mastercard.svg",
      number: "1234 **** **** ****",
      date: "10 / 2025",
    },
    {
      id: "3",
      name: "Ralf Edward",
      image:
        "https://bazaar.ui-lib.com/assets/images/payment-methods/PayPal.svg",
      number: "ui-lib@email.com",
      date: "N/A",
    },
    {
      id: "4",
      name: "Ralf Edward",
      image: "https://bazaar.ui-lib.com/assets/images/payment-methods/Visa.svg",
      number: "1234 **** **** ****",
      date: "08 / 2022",
    },
  ];

  return (
    <ProfileSidebar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "16px",
          marginBottom: "24px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CreditCardIcon sx={{ fontSize: "25px", color: "#4e97fd" }} />
          <Typography
            sx={{
              fontSize: "25px",
              ml: "12px",
              color: "#2b3445",
              fontWeight: 700,
            }}
          >
            Payment Methods
          </Typography>
        </Box>
        <Button
          onClick={() => setShowPayment(!showPayment)}
          variant="contained"
          size="small"
          sx={{
            paddingX: "32px",
            fontSize: "14px",
          }}
        >
          {!showPayment ? "Add New Payment Method" : "Back To Payment Methods"}
        </Button>
      </Box>
      {!showPayment ? (
        <Box>
          {payments.map((payment) => (
            <Card key={payment.id} sx={{ marginY: "16px" }}>
              <CardContent
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: "0px",
                  }}
                >
                  <Box sx={{ widht: "42px", height: "28px" }}>
                    <CardMedia
                      sx={{ width: "100%" }}
                      component="img"
                      image={payment.image}
                      alt="card"
                    />
                  </Box>
                  <Typography
                    sx={{
                      margin: "6px",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#2b3445",
                    }}
                  >
                    {payment.name}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: "0px",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#2b3445",
                    margin: "6px",
                  }}
                >
                  {payment.number}
                </Typography>
                <Typography
                  sx={{
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: "0px",
                    fontSize: "14px",
                    fontWeight: 400,
                    margin: "6px",
                    color: "#2b3445",
                  }}
                >
                  {payment.date}
                </Typography>
                <Box>
                  <IconButton aria-label="edit" size="large">
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      ) : (
        <AddPayment />
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          marginBottom: "30px",
        }}
      >
        <Pagination
          variant="outlined"
          color="primary"
          count={10}
          page={page}
          onChange={handleChange}
        />
      </Box>
    </ProfileSidebar>
  );
};

export default PaymentMethod;
