import ProfileSidebar from "@/components/shared/profile-sidebar";
import {
  Box,
  Button,
  Chip,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import EastIcon from "@mui/icons-material/East";

const Orders = () => {
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
      satus: "Processing",
      date: "Nov 10, 2022",
      price: "$350.00",
    },
    {
      id: "4",
      orderId: "f0ba538b",
      satus: "Delivered",
      date: "Nov 10, 2022",
      price: "$350.00",
    },
    {
      id: "5",
      orderId: "f0ba538b",
      satus: "Cancelled",
      date: "Nov 10, 2022",
      price: "$350.00",
    },
    {
      id: "6",
      orderId: "f0ba538b",
      satus: "Delivered",
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
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          paddingX: "18px",
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
      </Box>
      <Box>
        {orders.map((order) => (
          <Paper
            key={order.id}
            elevation={1}
            sx={{
              paddingX: "16px",
              paddingY: "12px",
              marginY: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                color: "#2b3445",
                textAlign: "left",
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: "0px",
                margin: "6px",
              }}
            >
              {order.orderId}
            </Typography>
            <Box
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                color: "#2b3445",
                textAlign: "left",
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: "0px",
                margin: "6px",
              }}
            >
              {/* {order.satus === "pending" ? (
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
                    color: "#0c0e30",
                    backgroundColor: "#e8e8ee",
                  }}
                />
              ) : order.satus === "processing" ? (
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
                    color: "#0c0e30",
                    backgroundColor: "#e8e8ee",
                  }}
                />
              ) : order.satus === "delivered" ? (
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
                    color: "#0c0e30",
                    backgroundColor: "#e8e8ee",
                  }}
                />
              ) : (
                order.satus === "cancelled" && (
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
                      color: "#0c0e30",
                      backgroundColor: "#e8e8ee",
                    }}
                  />
                )
              )} */}
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
                  color: "#0c0e30",
                  backgroundColor: "#e8e8ee",
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                color: "#2b3445",
                textAlign: "left",
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: "0px",
                margin: "6px",
              }}
            >
              {order.date}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                color: "#2b3445",
                textAlign: "left",
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: "0px",
                margin: "6px",
              }}
            >
              {order.price}
            </Typography>
            <Typography sx={{ flexGrow: 0, flexShrink: 0, flexBasis: "0px" }}>
              <IconButton aria-label="edit" size="small">
                <EastIcon fontSize="small" />
              </IconButton>
            </Typography>
          </Paper>
        ))}
      </Box>
    </ProfileSidebar>
  );
};

export default Orders;
