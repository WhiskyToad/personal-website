import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    offWhite: "#f9eeeb",
    grey: "#E6ECF8",
    purple: "#a65de5",
    blue: "#a1035b",
  },
  styles: {
    global: {
      body: {
        fontFamily: "Source Sans Pro",
        fontSize: "20px",
        fontWeight: "800",
        lineHeight: "1.64",
        bg: "white",
      },
      h1: {
        fontFamily: "Montserrat",
        fontSize: "42px",
        color: "purple",
      },
      h2: {
        fontFamily: "Montserrat",
        fontSize: "40px",
      },
      h3: {
        fontFamily: "Montserrat",
        fontSize: "38px",
        color: "purple",
      },
      h4: {
        fontFamily: "Montserrat",
        fontSize: "24px",
      },
    },
  },
  components: {
    Button: {
      variants: {
        contact: {
          color: "purple",
          border: "2px solid purple",
          borderRadius: "20px",
          _hover: {
            bg: "purple",
            color: "white",
          },
        },
      },
    },
  },
  textStyles: {
    project: {
      fontFamily: "Monteserrat",
      fontSize: ["28px", "38px", "38px", "30px"],
      color: "white",
    },
  },
});

export default theme;
