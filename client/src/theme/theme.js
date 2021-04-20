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
    heading: {
      fontFamily: ["BebasNeue"],
      fontSize: ["28px", "38px", "38px", "54px"],
      color: "teal",
    },
    subHeading: {
      fontFamily: ["BebasNeue"],
      fontSize: ["28px", "38px", "38px", "24px"],
    },
  },
});

export default theme;
