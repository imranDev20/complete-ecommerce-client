import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

const DeliveryTime = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Avatar
            sx={{
              backgroundColor: "primary.main",
              width: 30,
              height: 30,
              mr: 1,
            }}
          >
            1
          </Avatar>
          <Typography
            component="h3"
            sx={{
              fontSize: 20,
            }}
          >
            Delivery Date and Time
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item md={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Delivery Date</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Delivery Date"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Delivery Time</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Delivery Time"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default DeliveryTime;
