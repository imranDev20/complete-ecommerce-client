import { createTheme } from "@mui/material/styles";

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
    },
  },
});

export default theme;
