import React from "react";
import { Box, Container, Grid, Link as MuiLink } from "@mui/material";
import SearchField from "./search-field";
import { HEADER_LINKS as navLinks } from "@/common/utils/constants";
import Link from "next/link";
import HeaderRightOptions from "./header-right-options";

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
          <Grid
            item
            sm={3}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <HeaderRightOptions />
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
              justifyContent: "flex-end",
            }}
          >
            {Object.keys(navLinks).map((key: string, index) =>
              navLinks[key].showInNav ? (
                <MuiLink
                  sx={{
                    mr: 5,
                    textDecoration: "none",
                    color: "text.secondary",
                    fontSize: 14,
                    "&:last-of-type": {
                      mr: 0,
                    },
                  }}
                  component={Link}
                  key={index}
                  href={navLinks[key].route}
                >
                  {navLinks[key].name}
                </MuiLink>
              ) : null
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
