import React from "react";
import { Box, Image, Text, HStack, Tooltip } from "@chakra-ui/react";

import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Links = () => {
  return (
    <>
      <HStack
        color="white"
        justify="center"
        align="baseline"
        fontSize="3rem"
        spacing={7}
      >
        <Tooltip hasArrow label="Linkedin profile" bg="teal" placement="top">
          <a href="https://www.linkedin.com/in/steven-craig-082717203/">
            <AiFillLinkedin />
          </a>
        </Tooltip>
        <Tooltip hasArrow label="Github link" bg="teal" placement="top">
          <a href="https://github.com/WhiskyToad">
            <AiFillGithub />
          </a>
        </Tooltip>
        <Tooltip hasArrow label="Email me" bg="teal" placement="top">
          <a href="mailto:stevencraig321@gmail.com">
            <AiOutlineMail />
          </a>
        </Tooltip>
      </HStack>
    </>
  );
};

export default Links;
