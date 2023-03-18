import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          sx={{ textTransform: "capitalize", px: 7 }}
          variant="contained"
          size="small"
          startIcon={<Add />}
        >
          Brilliant Bhai
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
