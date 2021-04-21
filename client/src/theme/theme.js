import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Open Sans",
        fontSize: "18px",
      },
    },
  },
  textStyles: {
    navBarTitle: {
      fontFamily: ["BebasNeue"],
      fontSize: ["28px", "38px", "38px", "54px"],
      color: "#daad86",
    },
    heading: {
      fontFamily: ["Raleway", "sans-serif"],
      fontSize: ["28px", "38px", "38px", "34px"],

      color: "#659dbd",
    },
    subHeading: {
      fontFamily: ["BebasNeue"],
      fontSize: ["28px", "38px", "38px", "24px"],
    },
    neon: {
      fontFamily: ["neon"],
      color: "#FB4264",
      fontSize: "70px",
      lineHeight: "9vw",
    },
    neonSmall: {
      fontFamily: ["neon"],
      color: "#FB4264",
      fontSize: "40px",
      lineHeight: "9vw",
      textShadow: "0 0 3vw #fed128",
    },
  },
});

export default theme;
