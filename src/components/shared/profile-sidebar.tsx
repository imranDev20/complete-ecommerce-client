import { Bluetooth, ShoppingBagOutlined, Wifi } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React from "react";

type ProfileSidebarProps = {
  children: React.ReactNode;
};

const groups = ["Dashboard", "Account Settings"];
const items = [
  {
    name: "Orders",
    icon: ShoppingBagOutlined,
    group: "Dashboard",
  },
  {
    name: "WishList",
    icon: ShoppingBagOutlined,
    group: "Dashboard",
  },
  {
    name: "Support Tickets",
    icon: ShoppingBagOutlined,
    group: "Dashboard",
  },
  {
    name: "Profile Info",
    icon: ShoppingBagOutlined,
    group: "Account Settings",
  },
];

const ProfileSidebar = ({ children }: ProfileSidebarProps) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item md={3}>
          <List
            dense
            disablePadding
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            subheader={<li />}
          >
            {groups.map((sectionId) => (
              <li key={`section-${sectionId}`}>
                <Box component="ul" sx={{ mb: 2, p: 0 }}>
                  <ListSubheader
                    sx={{
                      fontWeight: 400,
                      textTransform: "uppercase",
                      fontSize: 13,
                    }}
                  >
                    {sectionId}
                  </ListSubheader>
                  {items
                    .filter((val) => val.group === sectionId)
                    .map((item) => (
                      <ListItem key={`item-${sectionId}-${item.name}`}>
                        <ListItemIcon
                          sx={{
                            minWidth: 30,
                          }}
                        >
                          <ShoppingBagOutlined fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                      </ListItem>
                    ))}
                </Box>
              </li>
            ))}
          </List>
        </Grid>
        <Grid item md={9}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfileSidebar;
