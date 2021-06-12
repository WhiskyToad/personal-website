import React from "react";
import { Text, HStack, VStack } from "@chakra-ui/react";

import { IoRocketSharp } from "react-icons/io5";
import { SiDynamics365 } from "react-icons/si";
import { AiOutlinePicture } from "react-icons/ai";

const Skills = () => {
  return (
    <HStack
      bg="white"
      mx="auto"
      mt="-100px"
      maxW="1000px"
      justify="space-evenly"
      border="1px solid black"
      borderRadius="20px"
      boxShadow="md"
      zIndex="99"
      textAlign="center"
    >
      <VStack w="30%">
        <IoRocketSharp fontSize="60px" />
        <h3>Fast</h3>
        <Text>
          A lover of racing my sites are no exception, I am always striving to
          make them fast.
        </Text>
      </VStack>
      <VStack w="30%">
        <AiOutlinePicture fontSize="60px" />
        <h3>Big-picture thinker</h3>
        <Text>
          I take pride in my ability to see the big picture and how all the
          individual pieces slot togethor for success.
        </Text>
      </VStack>
      <VStack w="30%">
        <SiDynamics365 fontSize="60px" />
        <h3>Dynamic</h3>
        <Text>
          Never one to shy away from a challenge I'll learn whatever is
          necessarry to provide the best project I can.
        </Text>
      </VStack>
    </HStack>
  );
};

export default Skills;
