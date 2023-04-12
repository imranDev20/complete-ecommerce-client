import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, ButtonBase } from "@mui/material";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  marginBottom: 3,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#f3f5f9",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const CatagoriesAccordion = ({ catagory }: any) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          disableRipple={false}
          sx={{
            p: "8px",
            width: "inherit",
            minHeight: "initial",

            transition:
              "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",

            "& .MuiAccordionSummary-content": {
              m: 0,
              alignItems: "center",
            },

            "&:hover": {
              backgroundColor: "primary.light",
              "& .MuiTypography-root": {
                color: "primary.main",
              },
              "& .MuiSvgIcon-root": {
                color: "primary.main",
                transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              },
            },
          }}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Box
            sx={{
              mr: "8px",
              ml: "-4px",
              "& .MuiSvgIcon-root": {
                fontSize: 20,
              },
            }}
          >
            {catagory.icon}
          </Box>
          <Typography
            sx={{
              fontSize: 14,
              color: "text.secondary",
              fontWeight: 500,
              lineHeight: 1.75,
              transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            }}
          >
            {catagory.name}
          </Typography>
        </AccordionSummary>

        {catagory.subCatagory.map((sub: any) => (
          <AccordionDetails key={sub.id} sx={{ p: 0 }}>
            <ButtonBase
              sx={{
                py: "10.75px",
                width: "100%",
                justifyContent: "start",

                "&:hover": {
                  backgroundColor: "primary.light",

                  "& .MuiTypography-root": {
                    color: "primary.main",
                  },
                  "& .MuiBox-root": {
                    backgroundColor: "primary.main",
                  },
                },
              }}
            >
              <Box
                sx={{
                  ml: 5,
                  mr: 1.3,
                  backgroundColor: "#7d879c",

                  height: 4,
                  width: 4,
                  borderRadius: 4,
                }}
              ></Box>
              <Typography sx={{ fontSize: 14, color: "text.secondary" }}>
                {sub.name}
              </Typography>
            </ButtonBase>
          </AccordionDetails>
        ))}
      </Accordion>
    </>
  );
};

export default CatagoriesAccordion;
