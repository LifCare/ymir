import { createMuiTheme } from "@material-ui/core/styles";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: { main: "#007EE5" },
    secondary: { main: "#007EE5" },
    customColors: {
      white: "#FFFFFF",
      lightGrey: "#788794",
      darkGrey: "#3B464E",
      red: "#D81E34",
      green: "#80C241",
      ultraLightGrey: "#aaaaaa",
      grey200: "#9b9b9b",
      grey222: "#222222",
      grey788794: "#788794"
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["Avenir", "Avenir-Roman", "sans-serif"],
    color: "#3b464e",
    avenirDefault: {
      fontFamily: ["Avenir", "sans-serif"],
      fontSize: 15,
      fontWeight: 500
    },
    avenirLight: {
      fontWeight: 300,
      fontFamily: ["Avenir", "sans-serif"]
    },
    avenir18: {
      fontSize: 18,
      fontFamily: ["Avenir", "sans-serif"]
    },
    avenirRoman13: {
      fontSize: 13,
      fontFamily: ["Avenir-Roman", "sans-serif"]
    },
    avenirRoman15: {
      fontSize: 15,
      fontFamily: ["Avenir-Roman", "sans-serif"]
    },
    avenirRoman18: {
      fontSize: 18,
      fontFamily: ["Avenir-Roman", "sans-serif"]
    }
  },
  spacing: 10 
});

function createPageContext() {
  return {
    theme
  };
}

let pageContext;

export default function getPageContext() {
  // Reuse context on the client-side.
  if (!pageContext) {
    pageContext = createPageContext();
  }

  return pageContext;
}
