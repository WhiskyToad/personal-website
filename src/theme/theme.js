import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    offWhite: "#f9eeeb",
    grey: "#E6ECF8",
    purple: "#AA00FF",
    orange: "#ff4500",
  },
  styles: {
    global: {
      body: {
        fontFamily: "Source Sans Pro",
        fontSize: ["16px", "16px", "18px", "18px"],
        fontWeight: "800",
        lineHeight: "1.64",
        bg: "white",
      },
      h1: {
        fontFamily: "Montserrat",
        fontSize: ["24px", "30px", "42px", "42px"],
        color: "purple",
      },
      h2: {
        fontFamily: "Montserrat",
        fontSize: ["22px", "28px", "40px", "40px"],
      },
      h3: {
        fontFamily: "Montserrat",
        fontSize: "20px",
      },
      h4: {
        fontFamily: "Montserrat",
        fontWeight: "500",
        fontSize: ["20px", "20px", "24px", "24px"],
      },
      h5: {
        fontFamily: "Aldrich",
        fontSize: "30px",
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
    icon: {
      fontSize: ["40px", "40px", "50px", "60px"],
      color: "purple",
    },
    links: {
      fontFamily: "Aldrich",
      fontWeight: "bold",
      fontSize: { base: "18px", md: "20px" },
    },
  },
});

export default theme;
