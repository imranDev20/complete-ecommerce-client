import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import CatagoriesAccordion from "./catagories-accordion";

const ProductMenu = () => {
  const catagories = [
    {
      id: "1",
      name: "Home",
      link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      subCatagory: [],
    },
    {
      id: "2",
      name: "Popular Product",
      link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      subCatagory: [],
    },
    {
      id: "3",
      name: "Trending Product",
      link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      subCatagory: [],
    },
    {
      id: "4",
      name: "All Product",
      link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      subCatagory: [],
    },
    {
      id: "5",
      name: "Heath and Beauty",
      link: "",

      subCatagory: [
        {
          id: "1",
          name: "Beauty Item",
        },
        {
          id: "2",
          name: "Medicine Item",
        },
        {
          id: "3",
          name: "Mackup Item",
        },
      ],
    },
    {
      id: "6",
      name: "Maskara",
      link: "",
      subCatagory: [
        {
          id: "1",
          name: "Beauty Item",
        },
        {
          id: "2",
          name: "Medicine Item",
        },
        {
          id: "3",
          name: "Mackup Item",
        },
      ],
    },
    {
      id: "7",
      name: "Lotion",
      link: "",
      subCatagory: [
        {
          id: "1",
          name: "Beauty Item",
        },
        {
          id: "2",
          name: "Medicine Item",
        },
        {
          id: "3",
          name: "Mackup Item",
        },
      ],
    },
    {
      id: "8",
      name: "Powder",
      link: "",
      subCatagory: [
        {
          id: "1",
          name: "Beauty Item",
        },
        {
          id: "2",
          name: "Medicine Item",
        },
        {
          id: "3",
          name: "Mackup Item",
        },
      ],
    },
    {
      id: "9",
      name: "Face Mask",
      link: "",
      subCatagory: [
        {
          id: "1",
          name: "Beauty Item",
        },
        {
          id: "2",
          name: "Medicine Item",
        },
        {
          id: "3",
          name: "Mackup Item",
        },
      ],
    },
    {
      id: "10",
      name: "Digital Thermometer",
      link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      subCatagory: [],
    },
    {
      id: "11",
      name: "Oxyzen Pump",
      link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      subCatagory: [],
    },
    {
      id: "12",
      name: "Automotive",
      link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      subCatagory: [],
    },
  ];
  return (
    <Stack spacing={0}>
      <Typography
        sx={{
          backgroundColor: "#b8defe",
          paddingX: "18px",
          paddingY: "10px",
          fontSize: "17px",
          fontWeight: 600,
          color: "#2b3445",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        }}
      >
        Categories
      </Typography>
      {catagories.map((catagory) => {
        if (catagory?.subCatagory?.length > 0) {
          return <CatagoriesAccordion key={catagory.id} catagory={catagory} />;
        } else {
          return (
            <Button
              fullWidth
              startIcon={<HomeIcon />}
              sx={{
                display: "flex",
                justifyContent: "start",
                backgroundColor: "#f3f5f9",
                marginBottom: "3px",
                paddingX: "11px",
                paddingY: "8px",
              }}
              key={catagory.id}
            >
              {catagory.name}
            </Button>
          );
        }
      })}
    </Stack>
  );
};

export default ProductMenu;
