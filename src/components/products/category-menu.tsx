import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import CatagoriesAccordion from "./catagories-accordion";
import { HOME_CATEGORIES as categories } from "@/common/utils/constants";

const CategoryMenu = () => {
  return (
    <Stack
      spacing={0}
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 2px 3px rgba(3, 0, 71, 0.05)",
      }}
    >
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
      {categories.map((category) => {
        if (category?.subCatagory?.length > 0) {
          return <CatagoriesAccordion key={category.id} category={category} />;
        } else {
          return (
            <Button
              fullWidth
              startIcon={<category.icon />}
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                backgroundColor: "#f3f5f9",
                marginBottom: "3px",
                "&:last-of-type": {
                  marginBottom: "0",
                },
                paddingX: "11px",
                paddingY: "9px",
                textTransform: "capitalize",
                borderRadius: 0,
                fontSize: "14px",
                color: "text.secondary",
                fontWeight: 500,

                "& .MuiSvgIcon-root": {
                  color: "text.secondary",
                  transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                },
                "&:hover": {
                  color: "primary.main",
                  backgroundColor: "primary.light",

                  "& .MuiSvgIcon-root": {
                    color: "primary.main",
                  },
                },
              }}
              key={category.id}
            >
              {category.name}
            </Button>
          );
        }
      })}
    </Stack>
  );
};

export default CategoryMenu;
