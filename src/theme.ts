import { createTheme } from "@mui/material/styles";

// declare module '@mui/material/Card' {
//   interface CardPropsVariantOverrides {
//     product: true;
//   }
// }

const theme = createTheme({
  palette: {
    primary: {
      light: "rgb(219, 240, 254)",
      main: "#4E97FD",
      dark: "#2756B6",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff6666",
    },
    background: {
      default: "#F7F9FC",
      paper: "#fff",
    },
    text: {
      primary: "#243445",
      secondary: "#4b566b",
      disabled: "rgba(144,60,60,0.38)",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#F7F9FC",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            borderRadius: 2,
            boxShadow: "0px 1px 3px rgba(3, 0, 71, 0.09)",
            "&:hover": {
              boxShadow: "0px 1px 3px rgba(3, 0, 71, 0.09)",
            },
          }),
      },
      // variants:[
      //   {
      //     props: { variant: "white" },
      //     style: ({ theme }) =>
      //       theme.unstable_sx({
      //         borderRadius: 0,
      //         bgcolor: "white",
      //         color: "primary.main",
      //         "&:hover": {
      //           bgcolor: "primary.main",
      //           color: "white",
      //         },
      //         px: 3,
      //         py: 1,
      //       }),
      //   },
      // ]
    },

    MuiCardContent: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            "&:last-child": {
              paddingBottom: "inherit",
              padding: "16px",
            },
          }),
      },
    },

    MuiButton: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            minWidth: "initial",
            textTransform: "none",
          }),
      },
    },
  },
});

export default theme;
