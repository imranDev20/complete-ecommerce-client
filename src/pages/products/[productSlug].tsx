import ProductDescription from "@/components/products/product-description";
import ProductDescriptionReview from "@/components/products/product-description-review";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProductDetailsPage = () => {
  const [value, setValue] = useState<number | null>(6);
  const [product, setProduct] = useState({});

  const router = useRouter();

  const { productSlug } = router.query;
  const slugSplit = productSlug?.toString().split("-");

  useEffect(() => {
    if (slugSplit && slugSplit.length > 0) {
      const productId = slugSplit[slugSplit.length - 1];
    }
  }, [slugSplit]);

  return (
    <Container>
      <Grid container spacing={4} sx={{ marginTop: "24px" }}>
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "48px",
              width: "300px",
              height: "300px",
            }}
          >
            <Avatar
              src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=384&q=75"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              variant="square"
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "64px",
                height: "64px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                marginLeft: "auto",
                marginRight: "10px",
                border: "1px",
                borderStyle: "solid",
                borderColor: "#dae1e7",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <Avatar
                src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=384&q=75"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                variant="square"
              />
            </Box>
            <Box
              sx={{
                width: "64px",
                height: "64px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                marginLeft: "0px",
                marginRight: "auto",
                border: "1px",
                borderStyle: "solid",
                borderColor: "#dae1e7",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <Avatar
                src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=384&q=75"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                variant="square"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box>
            <Typography
              sx={{ fontSize: "30px", fontWeight: 700, marginBottom: "8px" }}
            >
              Classic Rolex Watch
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <Typography>Brand:</Typography>
              <Typography
                sx={{ fontSize: "14px", fontWeight: 600, color: "#2b3445" }}
              >
                Xiaomi
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <Typography
                sx={{ fontSize: "14px", fontWeight: 400, color: "#2b3445" }}
              >
                Rated:
              </Typography>
              <Rating
                sx={{ mx: "8px" }}
                size="small"
                name="read-only"
                value={value}
                readOnly
              />
              <Typography
                sx={{ fontSize: "14px", fontWeight: 600, color: "#2b3445" }}
              >
                (50)
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "16px" }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  marginBottom: "8px",
                  color: "#2b3445",
                }}
              >
                Option
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button variant="contained" sx={{ mr: "8px" }}>
                  Option 1
                </Button>
                <Button variant="contained" sx={{ mr: "8px" }}>
                  Option 2
                </Button>
                <Button variant="contained" sx={{ mr: "8px" }}>
                  Option 3
                </Button>
                <Button variant="contained" sx={{ mr: "8px" }}>
                  Option 4
                </Button>
              </Box>
            </Box>
            <Box sx={{ marginBottom: "16px" }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  marginBottom: "8px",
                  color: "#2b3445",
                }}
              >
                Type
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button variant="contained" sx={{ mr: "8px" }}>
                  Type 1
                </Button>
                <Button variant="contained" sx={{ mr: "8px" }}>
                  Type 2
                </Button>
                <Button variant="contained" sx={{ mr: "8px" }}>
                  Type 3
                </Button>
              </Box>
            </Box>
            <Box sx={{ paddingTop: "9px", marginBottom: "24px" }}>
              <Typography
                sx={{
                  fontSize: "25px",
                  marginBottom: "4px",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: "#4e97fd",
                }}
              >
                $350.00
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                }}
              >
                Stock Available
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "30px" }}>
              <Button
                size="large"
                variant="contained"
                sx={{
                  py: "6px",
                  px: "25px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Add To Cart
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#2b3445",
                }}
              >
                Sold By:
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#2b3445",
                  marginLeft: "8px",
                }}
              >
                Mobile Store
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box>{/* <ProductDescriptionReview /> */}</Box>
    </Container>
  );
};

export default ProductDetailsPage;
