import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";

const AddNewAddress = () => {
  return (
    <Card sx={{ marginBottom: "32px" }}>
      <CardContent>
        <Box sx={{ padding: "10px" }}>
          <Grid container spacing={3} sx={{ marginBottom: "24px" }}>
            <Grid item md={6}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  size="small"
                />
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Address Line"
                  variant="outlined"
                  size="small"
                />
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  size="small"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Button variant="contained">Save Changes</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AddNewAddress;
