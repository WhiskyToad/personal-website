import React from "react";

import { Box, Text, HStack, VStack, Image } from "@chakra-ui/react";

import portrait from "./Images/portrait.jpg";

const Landing = () => {
  return (
    <>
      <VStack h="100vh" maxW="800px" mx="auto" justify="flex-end">
        <VStack mb="20%">
          <HStack>
            <h2>Hello there, I'm </h2>
            <Box color="red">
              <h2>Steven Craig.</h2>
            </Box>
          </HStack>
          <h2>A full-stack web developer.</h2>
        </VStack>

        <Image src={portrait} alt="Steven Craig" w="300px" h="500px" />
      </VStack>
    </>
  );
};

export default Landing;
