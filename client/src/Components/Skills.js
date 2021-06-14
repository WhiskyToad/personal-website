import React from "react";
import { Box, Text, Flex, VStack } from "@chakra-ui/react";

import { IoRocketOutline } from "react-icons/io5";
import { HiOutlineRefresh } from "react-icons/hi";
import { AiOutlinePicture } from "react-icons/ai";

const Skills = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      mx="auto"
      mt="-150px"
      justify="space-evenly"
      align="center"
      textAlign="center"
    >
      <VStack
        bg="white"
        w="350px"
        spacing={6}
        p="40px 20px"
        border=" 1px solid #E6ECF8"
        borderRadius="20px"
        boxShadow="md"
        zIndex="99"
      >
        <Box textStyle="icon">
          <IoRocketOutline />
        </Box>
        <h4>Speed</h4>
        <Text>
          A racer by heart my sites are no exception, I am always striving and
          researching on how to make them as fast as possible.
        </Text>
      </VStack>
      <VStack
        bg="white"
        w="350px"
        m="10px"
        spacing={6}
        p="40px 20px"
        border=" 1px solid #E6ECF8"
        borderRadius="20px"
        boxShadow="md"
        zIndex="99"
      >
        <Box textStyle="icon">
          <AiOutlinePicture />
        </Box>
        <h4>Big-picture thinker</h4>
        <Text>
          I take pride in my ability to stand back and see the big picture and
          how all the individual pieces slot togethor for success.
        </Text>
      </VStack>
      <VStack
        bg="white"
        w="350px"
        spacing={6}
        p="40px 20px"
        border=" 1px solid #E6ECF8"
        borderRadius="20px"
        boxShadow="md"
        zIndex="99"
      >
        <Box textStyle="icon">
          <HiOutlineRefresh />
        </Box>
        <h4>Dynamic</h4>
        <Text>
          Never one to shy away from a challenge I'll learn whatever is
          necessarry to provide the best projects and experience I can.
        </Text>
      </VStack>
    </Flex>
  );
};

export default Skills;
