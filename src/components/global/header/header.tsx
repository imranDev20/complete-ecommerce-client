import React from "react";
import {
  Box,
  Container,
  Grid,
  Link as MuiLink,
  Paper,
  Stack,
  styled,
} from "@mui/material";
import SearchField from "./search-field";
import { HEADER_LINKS as navLinks } from "@/common/utils/constants";
import Link from "next/link";

const Header = () => {
  return (
    <Box component="header" sx={{ width: "100%", backgroundColor: "white" }}>
      <Container maxWidth="lg" sx={{ pt: 2, pb: 1.5 }}>
        <Grid container spacing={3}>
          <Grid item sm={3}>
            Block 1
          </Grid>
          <Grid item sm={6}>
            <SearchField />
          </Grid>
          <Grid item sm={3}>
            Block 2
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ pb: 2, pt: 1.5 }}>
        <Grid container alignItems="center">
          <Grid item sm={5}>
            Block 1
          </Grid>
          <Grid
            item
            sm={7}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {Object.keys(navLinks).map((key: string, index) => (
              <MuiLink
                sx={{
                  mr: 5,
                  textDecoration: "none",
                  color: "text.secondary",
                  fontSize: 14,
                }}
                component={Link}
                key={index}
                href={navLinks[key].route}
              >
                {navLinks[key].name}
              </MuiLink>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
