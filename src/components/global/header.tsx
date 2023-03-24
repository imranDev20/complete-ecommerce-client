import React from "react";
import { Box, Paper, Stack, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Header = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack>
        <Item sx={{ paddingY: 3 }}>Header Component</Item>
      </Stack>
    </Box>
  );
};

export default Header;
