import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Vollkorn",
  },
  textStyles: {
    navbar: {
      fontFamily: ["BebasNeue"],
      fontSize: ["28px", "38px", "38px", "52px"],
      color: "yellow",
    },
  },
});

export default theme;
