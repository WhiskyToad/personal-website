import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Open Sans",
  },
  textStyles: {
    landing: {
      fontFamily: ["BebasNeue"],
      fontSize: ["28px", "38px", "38px", "63px"],
      color: "teal",
    },
  },
});

export default theme;
