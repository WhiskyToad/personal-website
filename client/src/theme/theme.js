import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    teal: "#04c2c9",
    red: "#c21d63",
    grey: "#6b95a6",
    blue: "#6359ff",
  },
  styles: {
    global: {
      body: {
        fontFamily: "Source Sans Pro",
        fontSize: "22px",
        fontWeight: "1000",
        lineHeight: "1.64",
        bg: "#f3efe0",
      },
      h1: {
        fontFamily: "Lobster",
        fontSize: "30px",
      },
      h2: {
        fontFamily: "Montserrat",
        fontSize: "40px",
      },
      h3: {
        fontFamily: "Montserrat",
        fontSize: "30px",
      },
      li: {
        listStyle: "none",
        float: "left",
        mx: "20px",
        color: "white",
        cursor: "pointer",
        fontWeight: "1000",
      },
    },
  },
  components: {
    ListItem: {
      listStyle: "none",
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
      fontSize: ["20px", "24pxx", "24px", "24px"],
    },
    neon: {
      fontFamily: ["neon"],
      color: "#FB4264",
      fontSize: ["40px", "50px", "60px", "70px"],
      lineHeight: "9vw",
    },
    neonSmall: {
      fontFamily: ["neon"],
      color: "#FB4264",
      fontSize: ["30px", "30px", "40px", "40px"],
      lineHeight: "9vw",
      textShadow: "0 0 3vw #fed128",
    },
  },
});

export default theme;
