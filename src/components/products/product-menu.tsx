import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import MasksOutlinedIcon from "@mui/icons-material/MasksOutlined";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import SanitizerOutlinedIcon from "@mui/icons-material/SanitizerOutlined";
import Face4OutlinedIcon from "@mui/icons-material/Face4Outlined";
import BatterySaverOutlinedIcon from "@mui/icons-material/BatterySaverOutlined";
import FireExtinguisherOutlinedIcon from "@mui/icons-material/FireExtinguisherOutlined";
import TapasOutlinedIcon from "@mui/icons-material/TapasOutlined";
import CatagoriesAccordion from "./catagories-accordion";
import {
  AllProductsIcon,
  EyeglassIcon,
  FaceMaskIcon,
  HomeIcon,
  LotionIcon,
  MakeupIcon,
  MascaraIcon,
  PowderIcon,
  PumpIcon,
  ThermoMeterIcon,
  TrendIcon,
  TrophyIcon,
  WheelIcon,
} from "../global/svg-icons";

const ProductMenu = () => {
  const catagories = [
    {
      id: "1",
      name: "Home",
      icon: <HomeIcon inheritViewBox />,
      link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      subCatagory: [],
    },
    {
      id: "2",
      name: "Popular Product",
      icon: <TrophyIcon inheritViewBox />,
      link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      subCatagory: [],
    },
    {
      id: "3",
      name: "Trending Product",
      icon: <TrendIcon inheritViewBox />,
      link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      subCatagory: [],
    },
    {
      id: "4",
      name: "All Product",
      icon: <AllProductsIcon inheritViewBox />,
      link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      subCatagory: [],
    },
    {
      id: "5",
      name: "Heath and Beauty",
      icon: <MakeupIcon inheritViewBox />,
      link: "",

      subCatagory: [
        {
          id: "1",
          name: "Beauty Item",
          link: "https://bazaar.ui-lib.com/healthbeauty-shop",
        },
        {
          id: "2",
          name: "Medicine Item",
          link: "https://bazaar.ui-lib.com/healthbeauty-shop",
        },
        {
          id: "3",
          name: "Mackup Item",
          link: "https://bazaar.ui-lib.com/healthbeauty-shop",
        },
      ],
    },
    {
      id: "6",
      name: "Maskara",
      icon: <MascaraIcon inheritViewBox />,
      link: "",
      subCatagory: [
        {
          id: "1",
          name: "Beauty Item",
          link: "https://bazaar.ui-lib.com/healthbeauty-shop",
        },
        {
          id: "2",
          name: "Medicine Item",
          link: "https://bazaar.ui-lib.com/healthbeauty-shop",
        },
        {
          id: "3",
          name: "Mackup Item",
          link: "https://bazaar.ui-lib.com/healthbeauty-shop",
        },
      ],
    },
    {
      id: "7",
      name: "Lotion",
      icon: <LotionIcon inheritViewBox />,
      link: "",
      subCatagory: [
        {
          id: "1",
          name: "Beauty Item",
          link: "https://bazaar.ui-lib.com/healthbeauty-shop",
        },
        {
          id: "2",
          name: "Medicine Item",
          link: "https://bazaar.ui-lib.com/healthbeauty-shop",
        },
        {
          id: "3",
          name: "Mackup Item",
          link: "https://bazaar.ui-lib.com/healthbeauty-shop",
        },
      ],
    },
    {
      id: "8",
      name: "Makeup",
      icon: <MakeupIcon inheritViewBox />,
      link: "",
      subCatagory: [
        {
          id: "1",
          name: "Beauty Item",
          link: "https://bazaar.ui-lib.com/healthbeauty-shop",
        },
        {
          id: "2",
          name: "Medicine Item",
          link: "https://bazaar.ui-lib.com/healthbeauty-shop",
        },
        {
          id: "3",
          name: "Mackup Item",
          link: "https://bazaar.ui-lib.com/healthbeauty-shop",
        },
      ],
    },
    {
      id: "9",
      name: "Powder",
      icon: <PowderIcon inheritViewBox />,
      link: "",
      subCatagory: [
        {
          id: "1",
          name: "Beauty Item",
          link: "https://bazaar.ui-lib.com/healthbeauty-shop",
        },
        {
          id: "2",
          name: "Medicine Item",
          link: "https://bazaar.ui-lib.com/healthbeauty-shop",
        },
        {
          id: "3",
          name: "Mackup Item",
          link: "https://bazaar.ui-lib.com/healthbeauty-shop",
        },
      ],
    },
    {
      id: "10",
      name: "Face Mask",
      icon: <FaceMaskIcon inheritViewBox />,
      link: "",
      subCatagory: [
        {
          id: "1",
          name: "Beauty Item",
          link: "https://bazaar.ui-lib.com/healthbeauty-shop",
        },
        {
          id: "2",
          name: "Medicine Item",
          link: "https://bazaar.ui-lib.com/healthbeauty-shop",
        },
        {
          id: "3",
          name: "Mackup Item",
          link: "https://bazaar.ui-lib.com/healthbeauty-shop",
        },
      ],
    },
    {
      id: "11",
      name: "Digital Thermometer",
      icon: <ThermoMeterIcon inheritViewBox />,
      link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      subCatagory: [],
    },
    {
      id: "12",
      name: "Oxyzen Pump",
      icon: <PumpIcon inheritViewBox />,
      link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      subCatagory: [],
    },
    {
      id: "13",
      name: "Lens Case Kit",
      icon: <EyeglassIcon inheritViewBox />,
      link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      subCatagory: [],
    },
    {
      id: "14",
      name: "Automotive",
      icon: <WheelIcon inheritViewBox />,
      link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      subCatagory: [],
    },
  ];
  return (
    <Stack spacing={0} sx={{ backgroundColor: "white" }}>
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
                paddingY: "9px",
                textTransform: "capitalize",
                borderRadius: 0,
                fontSize: "14px",
                color: "text.secondary",
                fontWeight: 500,

                "& .MuiSvgIcon-root": {
                  color: "text.secondary",
                },
                "&:hover": {
                  color: "primary.main",
                  backgroundColor: "primary.light",

                  "& .MuiSvgIcon-root": {
                    color: "primary.main",
                  },
                },
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
