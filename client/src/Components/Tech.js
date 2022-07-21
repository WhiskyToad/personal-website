import React from "react";

import FadeInWhenVisible from "./utils/FadeInWhenVisible";

import { Box, List, ListItem, Text, VStack, Flex } from "@chakra-ui/react";
import { RiComputerLine } from "react-icons/ri";
import { IoServerOutline } from "react-icons/io5";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

const Tech = () => {
  return (
    <>
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
        <h2>My Tech Stack</h2>
        <Text maxW="700px">
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
              <RiComputerLine alt="front end" />
            </Box>
            <h3>Front-End</h3>
            <List>
              <ListItem>React</ListItem>
              <ListItem>JavaScript</ListItem>
              <ListItem>HTML</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>Chakra UI</ListItem>
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
              <IoServerOutline alt="back end" />
            </Box>
            <h3>Back-End</h3>
            <List>
              <ListItem>NodeJS</ListItem>
              <ListItem>Express</ListItem>
              <ListItem>NoSQL</ListItem>
            </List>
          </VStack>
          <VStack w="220px" spacing={6} p="40px 20px">
            <Box textStyle="icon">
              <GiPerspectiveDiceSixFacesRandom alt="others" />
            </Box>
            <h3>Others</h3>
            <List>
              <ListItem>Redux</ListItem>
              <ListItem>GraphQL</ListItem>
              <ListItem>REST API</ListItem>
            </List>
          </VStack>
        </Flex>
      </FadeInWhenVisible>
    </>
  );
};

export default Tech;
