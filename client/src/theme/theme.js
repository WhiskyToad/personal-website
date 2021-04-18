import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Open Sans",
  },
  textStyles: {
    heading: {
      fontFamily: ["BebasNeue"],
      fontSize: ["28px", "38px", "38px", "52px"],
      color: "teal",
    },
  },
});

export default theme;
