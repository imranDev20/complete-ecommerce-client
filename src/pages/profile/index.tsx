import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ProfileSidebar from "../../components/shared/profile-sidebar";
import PersonIcon from "@mui/icons-material/Person";
import SaveProfile from "@/components/profile/save-profile";
import EditProfile from "@/components/profile/edit-profile";

const Profile = () => {
  const [saveChange, setSaveChange] = React.useState(false);

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
          <PersonIcon sx={{ fontSize: "25px", color: "#4e97fd" }} />
          <Typography
            sx={{
              fontSize: "25px",
              ml: "12px",
              color: "#2b3445",
              fontWeight: 700,
            }}
          >
            My Profile
          </Typography>
        </Box>
        <Button
          onClick={() => setSaveChange(!saveChange)}
          variant="contained"
          size="small"
          sx={{
            paddingX: "32px",
            fontSize: "14px",
          }}
        >
          {!saveChange ? "Edit Profile" : "Back To Profile"}
        </Button>
      </Box>
      <Box>{!saveChange ? <SaveProfile /> : <EditProfile />}</Box>
    </ProfileSidebar>
  );
};

export default Profile;
