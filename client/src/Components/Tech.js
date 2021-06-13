import React from "react";
import { List, ListItem, Text, HStack, VStack } from "@chakra-ui/react";
import { RiComputerLine } from "react-icons/ri";
import { FaNetworkWired } from "react-icons/fa";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

const Tech = () => {
  return (
    <>
      <VStack
        bg="purple"
        color="white"
        w="100%"
        py="100px"
        justify="center"
        textAlign="center"
        spacing={12}
      >
        <h4>My Tech Stack</h4>
        <Text maxW="700px">
          This is the tech I currently have a firm understanding of. I am
          constantly building projects and expanding my knowledge.
        </Text>
      </VStack>
      <HStack
        bg="white"
        mt="-50px"
        mx="auto"
        maxW="1000px"
        justify="space-evenly"
        align="flex-start"
        border=" 1px solid #E6ECF8"
        borderRadius="20px"
        boxShadow="md"
        zIndex="99"
        textAlign="center"
      >
        <VStack w="33%" spacing={6} p="40px 20px">
          <RiComputerLine fontSize="60px" color="#ff4500" />
          <h4>Front-End</h4>
          <List>
            <ListItem>React</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>HTML</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>Chakra UI</ListItem>
          </List>
        </VStack>

        <VStack
          w="33%"
          minH="100%"
          spacing={6}
          p="40px 20px"
          borderRight=" 1px solid #E6ECF8"
          borderLeft=" 1px solid #E6ECF8"
        >
          <FaNetworkWired fontSize="60px" color="#ff4500" />
          <h4>Back-End</h4>
          <List>
            <ListItem>NodeJS</ListItem>
            <ListItem>Express</ListItem>
            <ListItem>NoSQL</ListItem>
          </List>
        </VStack>
        <VStack w="33%" spacing={6} p="40px 20px">
          <GiPerspectiveDiceSixFacesRandom fontSize="60px" color="#ff4500" />
          <h4>Others</h4>
          <List>
            <ListItem>Redux</ListItem>
            <ListItem>GraphQL</ListItem>
            <ListItem>REST API</ListItem>
            <ListItem>Apollo</ListItem>
          </List>
        </VStack>
      </HStack>
    </>
  );
};

export default Tech;
