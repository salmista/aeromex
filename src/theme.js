import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#000000", contrastText: "#FFF" },
    secondary: { main: "#6B63B5", contrastText: "#FFF" },
    default: { main: "#6B63B5", color: "#FFF", contrastText: "#FFF" },
  },
});
export default theme;
