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
            px: "8px",
            py: "5px",
            width: "inherit",
            minHeight: "initial",
            "& .MuiAccordionSummary-content": {
              m: 0,
            },
          }}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Box
            sx={{
              mr: "8px",
              ml: "-4px",
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
            }}
          >
            {catagory.name}
          </Typography>
        </AccordionSummary>

        {catagory.subCatagory.map((sub: any) => (
          <AccordionDetails key={sub.id}>
            <Typography>{sub.name}</Typography>
          </AccordionDetails>
        ))}
      </Accordion>
    </>
  );
};

export default CatagoriesAccordion;
