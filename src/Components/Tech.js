import React from "react";

import FadeInWhenVisible from "./utils/FadeInWhenVisible";

import { Box, List, ListItem, Text, VStack, Flex } from "@chakra-ui/react";
import { RiComputerLine } from "react-icons/ri";
import { IoServerOutline } from "react-icons/io5";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

const Tech = () => {
  return (
    <div className="techContainer">
      <VStack
        bg="purple"
        color="white"
        w="100%"
        py="100px"
        px="20px"
        justify="center"
        textAlign="center"
        spacing={12}
      >
        <h2 tabIndex={0}>My Tech Stack</h2>
        <Text maxW="700px" tabIndex={0}>
          This is the tech I currently have a firm understanding of. I am
          constantly building projects and expanding my knowledge.
        </Text>
      </VStack>
      <FadeInWhenVisible>
        <Flex
          direction={{ base: "column", md: "row" }}
          maxW={{ base: "220px", md: "680px" }}
          h={{ base: "null", md: "400px" }}
          bg="white"
          mt="-50px"
          mb="200px"
          mx="auto"
          justify="space-evenly"
          align={{ base: "center", md: "flex-start" }}
          border=" 1px solid #E6ECF8"
          borderRadius="20px"
          boxShadow="md"
          zIndex="999"
          textAlign="center"
        >
          <VStack w="220px" spacing={6} p="40px 20px">
            <Box textStyle="icon">
              <RiComputerLine alt="" />
            </Box>
            <h3 tabIndex={0}>Front-End</h3>
            <List tabIndex={0}>
              <ListItem>React</ListItem>
              <ListItem>TypeScript</ListItem>
              <ListItem>HTML</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>Chakra UI / MUI</ListItem>
            </List>
          </VStack>

          <VStack
            w="220px"
            h="100%"
            spacing={6}
            p="40px 20px"
            borderRight=" 1px solid #E6ECF8"
            borderLeft=" 1px solid #E6ECF8"
          >
            <Box textStyle="icon">
              <IoServerOutline alt="" />
            </Box>
            <h3 tabIndex={0}>Back-End</h3>
            <List tabIndex={0}>
              <ListItem>NodeJS</ListItem>
              <ListItem>Express</ListItem>
              <ListItem>NoSQL</ListItem>
              <ListItem>Python / Django</ListItem>
            </List>
          </VStack>
          <VStack w="220px" spacing={6} p="40px 20px">
            <Box textStyle="icon">
              <GiPerspectiveDiceSixFacesRandom alt="" />
            </Box>
            <h3 tabIndex={0}>Others</h3>
            <List tabIndex={0}>
              <ListItem>Redux</ListItem>
              <ListItem>GraphQL</ListItem>
              <ListItem>Cypress</ListItem>
              <ListItem>Accessibility</ListItem>
              <ListItem>REST API</ListItem>
            </List>
          </VStack>
        </Flex>
      </FadeInWhenVisible>
    </div>
  );
};

export default Tech;
