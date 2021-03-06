import React from "react";
import { Box, Text, HStack, VStack, Tooltip } from "@chakra-ui/react";
import { GiFrogPrince } from "react-icons/gi";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const About = () => {
  return (
    <>
      <Box bg="purple" mt="100vh" pt="80px" pb="250px">
        <VStack
          justify="center"
          mx="auto"
          px="20px"
          maxW="700px"
          color="white"
          textAlign="center"
          spacing={12}
        >
          <GiFrogPrince fontSize="60px" alt="toad" />
          <h3>About</h3>
          <Text>
            I am a full-stack developer with a focus on React and Node. Process
            orientated and goal driven, I know the end result and I focus on the
            steps to get there. Always striving to be better and learn new
            things.
          </Text>
          <Links />
        </VStack>
      </Box>
    </>
  );
};

//Navbar links
const Links = () => {
  return (
    <>
      <HStack
        color="white"
        justify="space-between"
        align="baseline"
        fontSize="60px"
        w="320px"
      >
        <Tooltip hasArrow label="Linkedin profile" bg="black">
          <a
            href="https://www.linkedin.com/in/steven-craig-082717203/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin alt="linked in" />
          </a>
        </Tooltip>
        <Tooltip hasArrow label="Github link" bg="black">
          <a
            href="https://github.com/WhiskyToad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub alt="github" />
          </a>
        </Tooltip>
        <Tooltip hasArrow label="Email me" bg="black">
          <a href="mailto:stevencraig321@gmail.com">
            <AiOutlineMail alt="email" />
          </a>
        </Tooltip>
      </HStack>
    </>
  );
};
export default About;
