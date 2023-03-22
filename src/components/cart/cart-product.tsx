import {
  Avatar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  FormControlLabel,
  IconButton,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import Switch from "@mui/material/Switch";
import React from "react";

const CartProduct = () => {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <Box>
      <Card sx={{ marginBottom: "24px" }}>
        <CardContent sx={{ padding: 0, paddingBottom: 0 }}>
          <Box
            sx={{ display: "flex", alignItems: "center", position: "relative" }}
          >
            <Avatar
              sx={{ width: 140, height: 140 }}
              src="https://bazaar.ui-lib.com/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"
            />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                rowGap: "16px",
                padding: "16px",
              }}
            >
              <Typography>Silver High Neck Sweater</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "#7d879c", fontSize: "14px" }}>
                  $210.00 x 1
                </Typography>
                <Typography
                  sx={{
                    marginLeft: 1,
                    color: "#d23f57",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  $210.00
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  size="small"
                  aria-label="reduce"
                  variant="outlined"
                  onClick={() => {
                    setCount(Math.max(count - 1, 1));
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 600,
                    marginX: "8px",
                    color: "#2b3445",
                  }}
                >
                  {count}
                </Typography>
                <Button
                  size="small"
                  aria-label="increase"
                  variant="outlined"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </Box>
            </Box>
            <IconButton
              sx={{ position: "absolute", top: "16px", right: "16px" }}
              aria-label="close"
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ marginBottom: "24px" }}>
        <CardContent sx={{ padding: 0, paddingBottom: 0 }}>
          <Box
            sx={{ display: "flex", alignItems: "center", position: "relative" }}
          >
            <Avatar
              sx={{ width: 140, height: 140 }}
              src="https://bazaar.ui-lib.com/assets/images/products/Fashion/Clothes/21.YellowCasualSweater.png"
            />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                rowGap: "16px",
                padding: "16px",
              }}
            >
              <Typography>Yellow Casual Sweater</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "#7d879c", fontSize: "14px" }}>
                  $210.00 x 1
                </Typography>
                <Typography
                  sx={{
                    marginLeft: 1,
                    color: "#d23f57",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  $210.00
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  size="small"
                  aria-label="reduce"
                  variant="outlined"
                  onClick={() => {
                    setCount(Math.max(count - 1, 1));
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 600,
                    marginX: "8px",
                    color: "#2b3445",
                  }}
                >
                  {count}
                </Typography>
                <Button
                  size="small"
                  aria-label="increase"
                  variant="outlined"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </Box>
            </Box>
            <IconButton
              sx={{ position: "absolute", top: "16px", right: "16px" }}
              aria-label="close"
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ marginBottom: "24px" }}>
        <CardContent sx={{ padding: 0, paddingBottom: 0 }}>
          <Box
            sx={{ display: "flex", alignItems: "center", position: "relative" }}
          >
            <Avatar
              sx={{ width: 140, height: 140 }}
              src="https://bazaar.ui-lib.com/assets/images/products/Fashion/Clothes/4.DenimBlueJeans.png"
            />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                rowGap: "16px",
                padding: "16px",
              }}
            >
              <Typography>Denim Blue Jeans</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "#7d879c", fontSize: "14px" }}>
                  $140.00 x 1
                </Typography>
                <Typography
                  sx={{
                    marginLeft: 1,
                    color: "#d23f57",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  $140.00
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  size="small"
                  aria-label="reduce"
                  variant="outlined"
                  onClick={() => {
                    setCount(Math.max(count - 1, 1));
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 600,
                    marginX: "8px",
                    color: "#2b3445",
                  }}
                >
                  {count}
                </Typography>
                <Button
                  size="small"
                  aria-label="increase"
                  variant="outlined"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </Box>
            </Box>
            <IconButton
              sx={{ position: "absolute", top: "16px", right: "16px" }}
              aria-label="close"
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CartProduct;
