import React from "react";
import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";

const SaveProfile = () => {
  const orders = [
    {
      id: "1",
      firstName: "Nick",
      lastName: "DuBuque",
      email: "Jayden.Gislason78@gmail.com",
      phone: "(445) 653-3771 x985",
      birth: "26 Apr, 1996",
      item: "All Orders",
      order: "16",
    },
    {
      id: "2",
      firstName: "Nick",
      lastName: "DuBuque",
      email: "Jayden.Gislason78@gmail.com",
      phone: "(445) 653-3771 x985",
      birth: "26 Apr, 1996",
      item: "Awaiting Payments",
      order: "02",
    },
    {
      id: "3",
      firstName: "Nick",
      lastName: "DuBuque",
      email: "Jayden.Gislason78@gmail.com",
      phone: "(445) 653-3771 x985",
      birth: "26 Apr, 1996",
      item: "Awaiting Shipment",
      order: "00",
    },
    {
      id: "4",
      firstName: "Nick",
      lastName: "DuBuque",
      email: "Jayden.Gislason78@gmail.com",
      phone: "(445) 653-3771 x985",
      birth: "26 Apr, 1996",
      item: "Awaiting Delivery",
      order: "01",
    },
  ];
  const users = [
    {
      id: "1",
      title: "First Name",
      titleName: "Nick",
    },
    {
      id: "2",
      title: "Last Name",
      titleName: "DuBuque",
    },
    {
      id: "3",
      title: "Email",
      titleName: "Jayden.Gislason78@gmail.com",
    },
    {
      id: "4",
      title: "Phone",
      titleName: "(445) 653-3771 x985",
    },
    {
      id: "5",
      title: "Birth Date",
      titleName: "26 Apr, 1996",
    },
  ];

  return (
    <>
      <Box sx={{ marginBottom: "32px" }}>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Paper
              elevation={2}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingX: "20px",
                paddingY: "12px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  sx={{ width: "65px", height: "65px" }}
                  alt="Cindy Baker"
                  src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80"
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    ml: "12px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#2b3445",
                    }}
                  >
                    Nick DuBuque
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#7d879c",
                      }}
                    >
                      Balance:
                    </Typography>
                    <Typography
                      sx={{ ml: "4px", fontSize: "14px", color: "#4e97fd" }}
                    >
                      $500.00
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  letterSpacing: "5px",
                  color: "#7d879c",
                }}
              >
                SILVER USER
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={6}>
            <Grid container spacing={4}>
              {orders.map((order) => (
                <Grid key={order.id} item md={3}>
                  <Paper
                    elevation={2}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      paddingX: "20px",
                      paddingY: "12px",
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: 600,
                        color: "#4e97fd",
                      }}
                    >
                      {order.order}
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "12px",
                        color: "#7d879c",
                      }}
                    >
                      {order.item}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Paper
        elevation={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: "20px",
          paddingY: "12px",
          marginBottom: "32px",
        }}
      >
        {users.map((user) => (
          <Box
            key={user.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              paddingY: "5px",
            }}
          >
            <Typography
              sx={{ fontSize: "12px", color: "#7d879c", marginBottom: "4px" }}
            >
              {user.title}
            </Typography>
            <Typography sx={{ fontSize: "15px" }}>{user.titleName}</Typography>
          </Box>
        ))}
      </Paper>
    </>
  );
};

export default SaveProfile;
