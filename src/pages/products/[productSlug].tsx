import ProductDescription from "@/components/products/product-description";
import ProductDescriptionReview from "@/components/products/product-description-review";

import {
  Box,
  Button,
  Container,
  Grid,
  Rating,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { GetServerSidePropsContext, NextPage } from "next";
import React from "react";
import { Product as ProductType } from "@/common/types/product.types";
import { getProductDetails } from "@/services/product-services";
import Image from "next/image";
import { NumericFormat } from "react-number-format";
import { addToCart } from "@/redux/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const CustomToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  ".MuiToggleButtonGroup-grouped:not(:first-of-type)": {
    marginLeft: "unset",
    borderTopLeftRadius: "inherit",
    borderBottomLeftRadius: "inherit",
    borderLeft: 0,
  },
  ".MuiToggleButtonGroup-grouped:not(:last-of-type)": {
    borderTopRightRadius: "inherit",
    borderBottomRightRadius: "inherit",
  },
  ".MuiToggleButtonGroup-grouped": {
    border: 0,
    marginRight: 8,
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: 14,
    paddingRight: 14,
    textTransform: "capitalize",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  },

  ".MuiToggleButtonGroup-grouped.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

type ProductProps = {
  product: ProductType;
};

const ProductDetailsPage: NextPage<ProductProps> = ({
  product,
}: ProductProps) => {
  const cart = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();

  const [alignment, setAlignment] = React.useState("web");

  console.log(cart);

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
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              height={300}
              width={300}
              quality={100}
              priority
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
              <Image
                src={product.image}
                alt={product.name}
                height={64}
                width={64}
                quality={60}
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
              <Image
                src={product.image}
                alt={product.name}
                height={64}
                width={64}
                quality={60}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box>
            <Typography
              sx={{ fontSize: "30px", fontWeight: 700, marginBottom: "8px" }}
            >
              {product.name}
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
                {product.brand}
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
                Rating:
              </Typography>
              <Rating
                size="small"
                sx={{ mx: "8px" }}
                name="half-rating-read"
                defaultValue={product.rating}
                precision={0.1}
                readOnly
              />

              <Typography
                sx={{ fontSize: "14px", fontWeight: 600, color: "#2b3445" }}
              >
                ({product.rating})
              </Typography>
            </Box>

            {product.attributes.map((item, index) => (
              <Box sx={{ marginBottom: "16px" }} key={index}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    marginBottom: "8px",
                    color: "#2b3445",
                    textTransform: "capitalize",
                  }}
                >
                  {item.name}
                </Typography>
                <CustomToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  size="small"
                  onChange={(e: React.MouseEvent<HTMLElement>, value: string) =>
                    setAlignment(value)
                  }
                  aria-label="Platform"
                >
                  {item.value.map((val) => (
                    <ToggleButton key={val} value="web">
                      {val} {item.unit}
                    </ToggleButton>
                  ))}
                </CustomToggleButtonGroup>
              </Box>
            ))}

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
                US$
                <NumericFormat
                  value={
                    product.offerPrice
                      ? product.offerPrice
                      : product.regularPrice
                  }
                  thousandsGroupStyle="thousand"
                  thousandSeparator=","
                  displayType="text"
                  renderText={(value) => <b>{value}</b>}
                />
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                }}
              >
                {product.stock > 0 ? "Stock Available" : "Stock Unavailable"}
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "30px" }}>
              <Button
                size="large"
                variant="contained"
                disableElevation
                onClick={() => dispatch(addToCart(product))}
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
      <Box>
        <ProductDescriptionReview />
      </Box>
    </Container>
  );
};

export default ProductDetailsPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;

  if (params) {
    const slug = params.productSlug?.toString().split("-");

    if (slug && slug.length > 0) {
      const productId = slug[slug?.length - 1];
      const productDetails = await getProductDetails(productId);
      const product = productDetails.data.data;

      return {
        props: {
          product,
        },
      };
    }
  }
};
