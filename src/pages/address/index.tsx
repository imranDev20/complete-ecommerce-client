import ProfileSidebar from "@/components/shared/profile-sidebar";
import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Address = () => {
  const address = [
    {
      id: "1",
      name: "Office",
      address: "497 Erdman Passage, New Zoietown",
      phone: "(213) 840-9416",
    },
    {
      id: "2",
      name: "Shop",
      address: "497 Erdman Passage, New Zoietown",
      phone: "(213) 840-9416",
    },
    {
      id: "3",
      name: "Garage",
      address: "497 Erdman Passage, New Zoietown",
      phone: "(213) 840-9416",
    },
    {
      id: "4",
      name: "Resturant",
      address: "497 Erdman Passage, New Zoietown",
      phone: "(213) 840-9416",
    },
    {
      id: "5",
      name: "Coffe House",
      address: "497 Erdman Passage, New Zoietown",
      phone: "(213) 840-9416",
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
          <PlaceIcon sx={{ fontSize: "25px", color: "#4e97fd" }} />
          <Typography
            sx={{
              fontSize: "25px",
              ml: "12px",
              color: "#2b3445",
              fontWeight: 700,
            }}
          >
            My Addresses
          </Typography>
        </Box>
        <Button
          // onClick={() => setSaveChange(!saveChange)}
          variant="contained"
          size="small"
          sx={{
            paddingX: "32px",
            fontSize: "14px",
          }}
        >
          Add New Address
          {/* {!saveChange ? "Edit Profile" : "Back To Profile"} */}
        </Button>
      </Box>
      <Box>
        {address.map((add) => (
          <Paper
            key={add.id}
            elevation={1}
            sx={{
              paddingX: "20px",
              paddingY: "12px",
              marginY: "16px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                color: "#2b3445",
                textAlign: "left",
              }}
            >
              {add.name}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                color: "#2b3445",
                textAlign: "left",
              }}
            >
              {add.address}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                color: "#2b3445",
                textAlign: "left",
              }}
            >
              {add.phone}
            </Typography>
            <Box>
              <IconButton aria-label="edit" size="large">
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          </Paper>
        ))}
      </Box>
    </ProfileSidebar>
  );
};

export default Address;
