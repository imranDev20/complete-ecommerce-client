import ProfileSidebar from "@/components/shared/profile-sidebar";
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Pagination,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddNewAddress from "@/components/profile/add-new-address";

const Address = () => {
  const [showAddress, setShowAddress] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

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
          onClick={() => setShowAddress(!showAddress)}
          variant="contained"
          size="small"
          sx={{
            paddingX: "32px",
            fontSize: "14px",
          }}
        >
          {!showAddress ? "Add New Address" : "Back To Address"}
        </Button>
      </Box>
      {!showAddress ? (
        <Box>
          {address.map((add) => (
            <Card key={add.id} sx={{ marginY: "16px" }}>
              <CardContent
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
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
                  {add.name}
                </Typography>

                <Typography
                  sx={{
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: "250px",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#2b3445",
                    margin: "6px",
                  }}
                >
                  {add.address}
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
              </CardContent>
            </Card>
          ))}
        </Box>
      ) : (
        <AddNewAddress />
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

export default Address;
