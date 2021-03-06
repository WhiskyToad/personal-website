import React from "react";
import { Box, Text, Flex, VStack } from "@chakra-ui/react";

import FadeInWhenVisible from "./utils/FadeInWhenVisible";

import { IoRocketOutline } from "react-icons/io5";
import { HiOutlineRefresh } from "react-icons/hi";
import { FaMobileAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <>
      <FadeInWhenVisible>
        <Flex
          direction={{ base: "column", md: "row" }}
          mx="auto"
          mt="-150px"
          maxW="1100px"
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
              <IoRocketOutline alt="rocket" />
            </Box>
            <h4>Speed</h4>
            <Text>
              A racer by heart my sites are no exception, I am always striving
              and researching on how to make them as fast as possible.
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
              <FaMobileAlt alt="picture" />
            </Box>
            <h4>Responsive</h4>
            <Text>
              The modern web is nothing without mobile compatibility, for that
              reason all my sites are designed from the ground up to be
              responsive and user friendly across all platforms.
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
              <HiOutlineRefresh alt="dynamic" />
            </Box>
            <h4>Dynamic</h4>
            <Text>
              Never one to shy away from a challenge I'll learn whatever is
              necessary to provide the best projects and experience I can.
            </Text>
          </VStack>
        </Flex>
      </FadeInWhenVisible>
    </>
  );
};

export default Skills;
