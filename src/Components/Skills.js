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
              <IoRocketOutline alt="" />
            </Box>
            <h4 tabIndex={0}>Speed</h4>
            <Text tabIndex={0}>
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
              <FaMobileAlt alt="" />
            </Box>
            <h4 tabIndex={0}>Responsive</h4>
            <Text tabIndex={0}>
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
              <HiOutlineRefresh alt="" />
            </Box>
            <h4 tabIndex={0}>Accessible</h4>
            <Text tabIndex={0}>
              The web should be for everyone and I am passionate about about creating high standard accessible websites.
            </Text>
          </VStack>
        </Flex>
      </FadeInWhenVisible>
    </>
  );
};

export default Skills;
