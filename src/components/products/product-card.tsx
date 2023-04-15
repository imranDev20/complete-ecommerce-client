import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { slugifyTitle } from "@/common/utils/functions";
import { Product as ProductType } from "@/common/types/product.types";
import Link from "next/link";
import Image from "next/image";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = (props: ProductCardProps) => {
  const [count, setCount] = React.useState(0);
  const [value, setValue] = React.useState<number | null>(6);

  const { product } = props;

  const slug = slugifyTitle(product.name);

  return (
    <Card sx={{ p: 0, position: "relative" }}>
      <Link href={`/products/${slug}-${product._id}`}>
        <Box sx={{ height: 283, position: "relative" }}>
          <Image src={product.image} alt={product.name} fill quality={100} />
        </Box>
      </Link>

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
            <Rating size="small" name="read-only" value={value} readOnly />
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
              US{product.regularPrice}
            </Typography>
            <Typography
              sx={{
                color: "#7d879c",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "line-through",
              }}
            >
              {product.offerPrice}
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
  );
};

export default ProductCard;
