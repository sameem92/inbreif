import { createTheme } from "@mui/material/styles";
import { IBM_Plex_Sans_Arabic } from "next/font/google";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ["100", "200", "300", "400", "500", "600", "700"], // Include all required weights
  subsets: ["arabic", "latin"], // Include the Arabic subset for correct font rendering
  display: "swap",
  variable: "--font-ibm-plex-sans-arabic", // Define a CSS variable for the font
});
const theme = createTheme({
  direction: "rtl",

  breakpoints: {
    values: {
      xs: 0,
      custom490: 490, // Custom breakpoint at 450px
      custom768:768,
      sm: 600,
      md: 900,
      custom992: 950, // Custom breakpoint at 450px

      lg: 1240, 
      // Set lg to 1240px
      xl: 1440, // You can set xl to any value, e.g., 1440px or keep it as is
    // @ts-ignore


    },
  },
  palette: {
    common: {
      black: "#001014",
    },
    primary: {
      main: "#E0E324",
    },
  },

  typography: {
    fontFamily: ibmPlexSansArabic.style.fontFamily,
    h1: {
      fontSize: "4.8rem",
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: -0.5,
    },
    h2: {
      fontSize: "3.6rem",
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "3rem",
      lineHeight: 1.2,
    },
    h4: {
      fontSize: "2.4rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1.8rem",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "2rem",
    },
    subtitle2: {
      fontSize: "1.4rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1.6rem",
    },
    body2: {
      fontSize: "1.6rem",
      fontWeight: 400,
    },
    caption: {
      fontSize: "1.2rem",
      fontWeight: 400,
    },
    button: {
      textTransform: "none",
      fontSize: "1.6rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#E0E324", // Default background color
          color: "#001014", // Default text color
          transition:
            "transform 0.3s ease, background-color 0.3s ease, color 0.3s ease", // Smooth transition including transform
          "&:hover": {
            backgroundColor: "#fff", // Hover background color
            color: "#001014", // Hover text color (black)
            transform: "translateY(-3px)", // Move the text slightly upwards
          },
          "&:disabled": {
            cursor: "not-allowed",
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          justifyContent: "center", // Center the grid items
          alignItems: "center", // Align items in the center
        },
      },
    },
  },
});

export default theme;
