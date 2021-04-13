import React from "react";

import { Box, Image, HStack, Link } from "@chakra-ui/react";

import linkedin from "./Images/linkedin.png";
import github from "./Images/github.png";
import strava from "./Images/strava.png";

const Contact = () => {
  return (
    <>
      <HStack justify="center" align="baseline">
        <a href="https://www.linkedin.com/in/steven-craig-082717203/">
          <Image m="20px" src={linkedin} />
        </a>
        <a href="https://github.com/WhiskyToad">
          <Image m="20px" src={github} />
        </a>
        <a href="https://www.strava.com/athletes/12969689">
          <Image m="20px" src={strava} />
        </a>
      </HStack>
      <Box>
        <Link href="mailto:stevencraig321@gmail.com" fontSize="40px">
          Click for Email
        </Link>
      </Box>
    </>
  );
};

export default Contact;
