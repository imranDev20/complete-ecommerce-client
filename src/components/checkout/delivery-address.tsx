import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { MouseEvent, useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeliveryAddressModal from "./delivery-address-modal";

const DeliveryAddress = () => {
  const [open, setOpen] = useState<boolean>(false); // declaring the accepted type

  return (
    <>
      <Card sx={{ marginTop: 3 }}>
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                sx={{
                  backgroundColor: "primary.main",
                  width: 30,
                  height: 30,
                  mr: 1,
                }}
              >
                2
              </Avatar>
              <Typography sx={{ fontSize: 20 }} component="h3">
                Delivery Address
              </Typography>
            </Box>
            <Button
              size="small"
              variant="outlined"
              onClick={() => setOpen(!open)}
              sx={{ px: 3 }}
            >
              Add New Address
            </Button>
          </Box>

          <Grid container spacing={2} sx={{ marginTop: 3 }}>
            <Grid item xs={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#f6f9fc",
                  padding: 2,
                  borderRadius: "8px",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <Box>
                  <Typography
                    component="h5"
                    sx={{
                      fontSize: "14px",
                      marginBottom: "4px",
                      marginTop: 0,
                      fontWeight: 600,
                    }}
                  >
                    Home
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      marginBottom: "4px",
                      marginTop: 0,
                      color: "#4b566b",
                    }}
                    variant="subtitle1"
                  >
                    321, Subid Bazaar
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      marginBottom: "4px",
                      marginTop: 0,
                      color: "#4b566b",
                    }}
                    variant="subtitle1"
                  >
                    01789123456
                  </Typography>
                </Box>
                <Box sx={{ position: "absolute", top: 2, right: 2 }}>
                  <IconButton aria-label="delete" color="primary">
                    <CreateOutlinedIcon />
                  </IconButton>
                  <IconButton aria-label="delete" color="primary">
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#f6f9fc",
                  padding: 2,
                  borderRadius: "8px",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <Box>
                  <Typography
                    component="h5"
                    sx={{
                      fontSize: "14px",
                      marginBottom: "4px",
                      marginTop: 0,
                      fontWeight: 600,
                    }}
                  >
                    Office
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      marginBottom: "4px",
                      marginTop: 0,
                      color: "#4b566b",
                    }}
                    variant="subtitle1"
                  >
                    321, Subid Bazaar
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      marginBottom: "4px",
                      marginTop: 0,
                      color: "#4b566b",
                    }}
                    variant="subtitle1"
                  >
                    01789123456
                  </Typography>
                </Box>
                <Box sx={{ position: "absolute", top: 2, right: 2 }}>
                  <IconButton aria-label="delete" color="primary">
                    <CreateOutlinedIcon />
                  </IconButton>
                  <IconButton aria-label="delete" color="primary">
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#f6f9fc",
                  padding: 2,
                  borderRadius: "8px",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <Box>
                  <Typography
                    component="h5"
                    sx={{
                      fontSize: "14px",
                      marginBottom: "4px",
                      marginTop: 0,
                      fontWeight: 600,
                    }}
                  >
                    Office 2
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      marginBottom: "4px",
                      marginTop: 0,
                      color: "#4b566b",
                    }}
                    variant="subtitle1"
                  >
                    321, Subid Bazaar
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      marginBottom: "4px",
                      marginTop: 0,
                      color: "#4b566b",
                    }}
                    variant="subtitle1"
                  >
                    01789123456
                  </Typography>
                </Box>
                <Box sx={{ position: "absolute", top: 2, right: 2 }}>
                  <IconButton aria-label="delete" color="primary">
                    <CreateOutlinedIcon />
                  </IconButton>
                  <IconButton aria-label="delete" color="primary">
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <DeliveryAddressModal open={open} setOpen={setOpen} />
    </>
  );
};

export default DeliveryAddress;
