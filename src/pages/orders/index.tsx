import React from "react";
import ProfileSidebar from "@/components/shared/profile-sidebar";
import {
  Box,
  Card,
  CardContent,
  Chip,
  IconButton,
  Pagination,
  Typography,
} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import EastIcon from "@mui/icons-material/East";

const Orders = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const orders = [
    {
      id: "1",
      orderId: "f0ba538b",
      satus: "Pending",
      date: "Nov 10, 2022",
      price: "$350.00",
    },

    {
      id: "2",
      orderId: "f0ba538b",
      satus: "Processing",
      date: "Nov 10, 2022",
      price: "$350.00",
    },
    {
      id: "3",
      orderId: "f0ba538b",
      satus: "Delivered",
      date: "Nov 10, 2022",
      price: "$350.00",
    },
    {
      id: "4",
      orderId: "f0ba538b",
      satus: "Cancelled",
      date: "Nov 10, 2022",
      price: "$350.00",
    },
  ];

  return (
    <ProfileSidebar>
      <Box
        sx={{
          display: "flex",
          marginTop: "16px",
          marginBottom: "24px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ShoppingBagIcon sx={{ fontSize: "25px", color: "#4e97fd" }} />
          <Typography
            sx={{
              fontSize: "25px",
              ml: "12px",
              color: "#2b3445",
              fontWeight: 700,
            }}
          >
            My Orders
          </Typography>
        </Box>
      </Box>
      <Box>
        <Card>
          <CardContent
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                marginX: "6px",
                textAlign: "left",
                fontSize: "16px",
                fontWeight: 500,
                color: "#7d879f",
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: "0px",
              }}
            >
              Order #
            </Typography>
            <Typography
              sx={{
                marginX: "6px",
                textAlign: "left",
                fontSize: "16px",
                fontWeight: 500,
                color: "#7d879f",
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: "0px",
              }}
            >
              Status
            </Typography>
            <Typography
              sx={{
                marginX: "6px",
                textAlign: "left",
                fontSize: "16px",
                fontWeight: 500,
                color: "#7d879f",
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: "0px",
              }}
            >
              Date purchased
            </Typography>
            <Typography
              sx={{
                marginX: "6px",
                textAlign: "left",
                fontSize: "16px",
                fontWeight: 500,
                color: "#7d879f",
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: "0px",
              }}
            >
              Total
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box>
        {orders.map((order) => (
          <Card key={order.id} sx={{ marginY: "16px" }}>
            <CardContent
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Typography
                sx={{
                  flexGrow: 1,
                  flexShrink: 1,
                  flexBasis: "0px",
                  margin: "6px",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#2b3445",
                }}
              >
                {order.orderId}
              </Typography>

              <Box
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
                <Chip
                  label={order.satus}
                  size="small"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "24px",
                    borderRadius: "16px",
                    cursor: "default",
                    paddingY: "4px",
                    paddingX: "8px",
                    fontSize: "12px",
                    // #0c0e30
                    color:
                      order.satus === "Pending"
                        ? "#0c0e30"
                        : order.satus === "Processing"
                        ? "#0c0e30"
                        : order.satus === "Delivered"
                        ? "#0b7724"
                        : order.satus === "Cancelled"
                        ? "#ff2929"
                        : null,

                    backgroundColor:
                      order.satus === "Pending"
                        ? "#e8e8ee"
                        : order.satus === "Processing"
                        ? "#e8e8ee"
                        : order.satus === "Delivered"
                        ? "#e7f9ed"
                        : order.satus === "Cancelled"
                        ? "#ffeaea"
                        : null,
                  }}
                />
              </Box>
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
                {order.date}
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
                {order.price}
              </Typography>

              <IconButton
                aria-label="edit"
                size="small"
                sx={{
                  position: "absolute",
                  display: "inline-flex",
                  alignItems: "center",
                  top: 19,
                  right: 24,
                }}
              >
                <EastIcon fontSize="small" />
              </IconButton>
            </CardContent>
          </Card>
        ))}
      </Box>
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

export default Orders;
