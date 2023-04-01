import {
  Avatar,
  Box,
  Button,
  FormControl,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const ProductReview = () => {
  const [value, setValue] = React.useState<number | null>(6);
  const [value1, setValue1] = React.useState<number | null>(0);

  const reviews = [
    {
      id: "1",
      name: "Jannie Schumm",
      image: "https://bazaar.ui-lib.com/assets/images/faces/7.png",
      time: "2.2 years ago",
      rating: <Rating size="small" name="read-only" value={value} readOnly />,
      ratingNumber: "4.7",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
    },
    {
      id: "2",
      name: "Jenifer Tulio",
      image: "https://bazaar.ui-lib.com/assets/images/faces/8.png",
      time: "2.3 years ago",
      rating: <Rating size="small" name="read-only" value={value} readOnly />,
      ratingNumber: "4.7",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
    },
    {
      id: "3",
      name: "Joe Kenan",
      image: "https://bazaar.ui-lib.com/assets/images/faces/6.png",
      time: "2.2 years ago",
      rating: <Rating size="small" name="read-only" value={value} readOnly />,
      ratingNumber: "4.7",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
    },
  ];

  return (
    <>
      <Box sx={{ maxWidth: "650px" }}>
        {reviews.map((review) => (
          <Box
            key={review.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginBottom: "32px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <Box
                sx={{
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                  overflow: "hidden",
                  borderRadius: "50%",
                }}
              >
                <Avatar src={review.image} />
              </Box>
              <Box sx={{ marginLeft: "16px" }}>
                <Typography
                  sx={{
                    marginBottom: "4px",
                    fontSize: "16px",
                    color: "#2b3445",
                    fontWeight: 600,
                  }}
                >
                  {review.name}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      display: "inline-flex",
                      position: "relative",
                      alignItems: "center",
                    }}
                  >
                    {review.rating}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 600, mx: "10px" }}
                  >
                    {review.ratingNumber}
                  </Typography>
                  <Typography sx={{ fontSize: "14px", color: "#2b3445" }}>
                    {review.time}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Typography sx={{ fontSize: "14px", color: "#4b566b" }}>
              {review.review}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: 600,
            marginTop: "50px",
            marginBottom: "20px",
            color: "#2b3445",
          }}
        >
          Write a Review for this product
        </Typography>
        <Box sx={{ marginBottom: "24px" }}>
          <Box sx={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
            <Typography
              sx={{ fontSize: "16px", fontWeight: 500, color: "#4b566b" }}
            >
              Your Rating
            </Typography>
            <Typography
              sx={{ fontSize: "16px", fontWeight: 600, color: "#4e97fd" }}
            >
              *
            </Typography>
          </Box>
          <Rating
            name="simple-controlled"
            value={value1}
            onChange={(event, newValue) => {
              setValue1(newValue);
            }}
          />
        </Box>
        <Box sx={{ marginBottom: "24px" }}>
          <Box sx={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
            <Typography
              sx={{ fontSize: "16px", fontWeight: 500, color: "#4b566b" }}
            >
              Your Review
            </Typography>
            <Typography
              sx={{ fontSize: "16px", fontWeight: 600, color: "#4e97fd" }}
            >
              *
            </Typography>
          </Box>
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Write a review here"
              placeholder="Write a review here.."
              variant="outlined"
              size="small"
              multiline
              rows={6}
            />
          </FormControl>
        </Box>
        <Button
          variant="contained"
          size="medium"
          sx={{ px: "20px", py: "8px" }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default ProductReview;
