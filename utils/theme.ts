import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export const serifFontFamily = ["Gelasio", "serif"].join(", ");

const headingStyle = {
  fontFamily: serifFontFamily,
  fontWeight: 700,
};
const headings = Object.fromEntries(
  [...Array(6)].map((_, i) => [`h${i + 1}`, headingStyle])
);

const theme = createMuiTheme({
  typography: {
    fontSize: 14,
    fontFamily: serifFontFamily,
    body1: {},
    body2: {
      fontFamily: serifFontFamily,
    },
    ...headings,
  },
  palette: {
    primary: {
      main: "#00796b",
      light: "#48a999",
      dark: "#004c40",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#90a4ae",
      light: "#c1d5e0",
      dark: "#62757f",
      contrastText: "#000",
    },
  },
});

export default responsiveFontSizes(theme, {
  variants: ["h1", "h2", "h3", "h4", "h5", "h6"],
});
