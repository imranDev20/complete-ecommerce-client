import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Box, Container } from "@mui/material";

const Hero = () => {
  return (
    <Container component="section" maxWidth={false}>
      <CarouselProvider
        totalSlides={3}
        naturalSlideHeight={10}
        naturalSlideWidth={100}
      >
        <Slider moveThreshold={0.3}>
          {["first", "second", "third"].map((item, index) => {
            return (
              <Slide
                key={index}
                index={0}
                style={{
                  minHeight: "300px",
                  px: 10,
                }}
              >
                {item}
              </Slide>
            );
          })}
        </Slider>

        <Box
          sx={{
            "& .carousel__dot": {
              backgroundColor: "transparent",
              border: "1px solid",
              borderColor: "primary.main",
              width: 17,
              height: 17,
              mx: 0.5,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 0.1,
            },

            "& .carousel__dot--selected": {
              "& span": {
                display: "block",
                width: 10,
                height: 10,
                backgroundColor: "primary.main",
                borderRadius: "50%",
              },
            },
          }}
        >
          <DotGroup
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          />
        </Box>
      </CarouselProvider>
    </Container>
  );
};

export default Hero;
