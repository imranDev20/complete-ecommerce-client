import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import MasksOutlinedIcon from "@mui/icons-material/MasksOutlined";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import HeatPumpOutlinedIcon from "@mui/icons-material/HeatPumpOutlined";
import SanitizerOutlinedIcon from "@mui/icons-material/SanitizerOutlined";
import Face4OutlinedIcon from "@mui/icons-material/Face4Outlined";
import BatterySaverOutlinedIcon from "@mui/icons-material/BatterySaverOutlined";
import FireExtinguisherOutlinedIcon from "@mui/icons-material/FireExtinguisherOutlined";
import TapasOutlinedIcon from "@mui/icons-material/TapasOutlined";
import CatagoriesAccordion from "./catagories-accordion";

const ProductMenu = () => {
  const catagories = [
    {
      id: "1",
      name: "Home",
      icon: <HomeOutlinedIcon />,
      link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      subCatagory: [],
    },
    {
      id: "2",
      name: "Popular Product",
      icon: <EmojiEventsOutlinedIcon />,
      link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      subCatagory: [],
    },
    {
      id: "3",
      name: "Trending Product",
      icon: <TrendingUpOutlinedIcon />,
      link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      subCatagory: [],
    },
    {
      id: "4",
      name: "All Product",
      icon: <FormatListBulletedOutlinedIcon />,
      link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      subCatagory: [],
    },
    {
      id: "5",
      name: "Heath and Beauty",
      icon: <Face4OutlinedIcon />,
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
      icon: <TapasOutlinedIcon />,
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
      icon: <SanitizerOutlinedIcon />,
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
      icon: <BatterySaverOutlinedIcon />,
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
      icon: <MasksOutlinedIcon />,
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
      icon: <DeviceThermostatOutlinedIcon />,
      link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      subCatagory: [],
    },
    {
      id: "11",
      name: "Oxyzen Pump",
      icon: <FireExtinguisherOutlinedIcon />,
      link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      subCatagory: [],
    },
    {
      id: "12",
      name: "Automotive",
      icon: <HeatPumpOutlinedIcon />,
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
              startIcon={catagory.icon}
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                backgroundColor: "#f3f5f9",
                marginBottom: "3px",
                paddingX: "11px",
                paddingY: "8px",
                textTransform: "capitalize",
              }}
              key={catagory.id}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#4b566b",
                  fontWeight: 500,
                }}
              >
                {catagory.name}
              </Typography>
            </Button>
          );
        }
      })}
    </Stack>
  );
};

export default ProductMenu;
