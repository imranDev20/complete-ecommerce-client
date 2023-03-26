import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

type Product = {
  readonly id: number;
  name: string;
  image: string;
  offerPrice: string;
  discountPrice: string;
};

type Products = Product[];

const Product = () => {
  const [count, setCount] = React.useState(0);
  const [value, setValue] = React.useState<number | null>(6);

  const products: Products = [
    {
      id: 1,
      name: "Mi Led Smart Watch",
      image:
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=1920&q=75",
      offerPrice: "$142.20",
      discountPrice: "$180.00",
    },
    {
      id: 2,
      name: "Classic Rolex Watch",
      image:
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=1920&q=75",
      offerPrice: "$297.50",
      discountPrice: "$350.00",
    },
    {
      id: 3,
      name: "Iphone 13 Pro Max",
      image:
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=1920&q=75",
      offerPrice: "$108.00",
      discountPrice: "$150.00",
    },
    {
      id: 4,
      name: "Mi Led Smart Watch",
      image:
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=1920&q=75",
      offerPrice: "$142.20",
      discountPrice: "$180.00",
    },
    {
      id: 5,
      name: "Classic Rolex Watch",
      image:
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=1920&q=75",
      offerPrice: "$297.50",
      discountPrice: "$350.00",
    },
    {
      id: 6,
      name: "Iphone 13 Pro Max",
      image:
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=1920&q=75",
      offerPrice: "$108.00",
      discountPrice: "$150.00",
    },
  ];

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid key={product.id} item md={4}>
          <Card sx={{ p: 0 }}>
            <CardMedia
              component="img"
              alt="product image"
              image={product.image}
            />

            {/* <Divider /> */}

            <Typography
              sx={{
                position: "absolute",
                top: "10px",
                left: "10px",
                fontSize: "10px",
                paddingX: "10px",
                paddingY: "4px",
                backgroundColor: "#4E97FD",
                color: "white",
                borderRadius: "16px",
                fontWeight: 600,
              }}
            >
              25% off
            </Typography>

            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    mb: 1,
                  }}
                >
                  {product.name}
                </Typography>
                <Box
                  sx={{
                    width: 200,
                    display: "flex",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Rating
                    size="small"
                    name="read-only"
                    value={value}
                    readOnly
                  />
                  <Box sx={{ ml: 0.5 }}>(4.5)</Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "4px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#4E97FD",
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    US{product.offerPrice}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#7d879c",
                      fontSize: "14px",
                      fontWeight: 600,
                      textDecoration: "line-through",
                    }}
                  >
                    {product.discountPrice}
                  </Typography>
                </Box>
              </Box>
              {count > 0 ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Button
                    onClick={() => {
                      setCount(count + 1);
                    }}
                    size="small"
                    variant="outlined"
                    aria-label="add"
                    sx={{ padding: "2px", minWidth: "unset" }}
                  >
                    <AddIcon />
                  </Button>
                  <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                    {count}
                  </Typography>
                  <Button
                    onClick={() => {
                      setCount(Math.max(count - 1));
                    }}
                    size="small"
                    variant="outlined"
                    aria-label="remove"
                    sx={{ padding: "2px", minWidth: "unset" }}
                  >
                    <RemoveIcon />
                  </Button>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                  }}
                >
                  <Button
                    onClick={() => {
                      setCount(count + 1);
                    }}
                    size="small"
                    variant="outlined"
                    aria-label="add"
                    sx={{ padding: "2px", minWidth: "unset" }}
                  >
                    <AddIcon />
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Product;
