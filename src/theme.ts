import { createMuiTheme } from "@material-ui/core";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

const palette: PaletteOptions = {
  type: "dark",
  primary: {
    main: "#b1cf72",
    contrastText: "#6b6b6b",
  },
  background: {
    default: "#6b6b6b",
  },
};

const theme = createMuiTheme({
  palette,
});

export default theme;