import React from "react";
import { Box, List, ListItem, Text, HStack, VStack } from "@chakra-ui/react";
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
      <HStack
        bg="white"
        mt="-50px"
        mb="200px"
        mx="auto"
        maxW="650px"
        justify="space-evenly"
        align="flex-start"
        border=" 1px solid #E6ECF8"
        borderRadius="20px"
        boxShadow="md"
        zIndex="99"
        textAlign="center"
      >
        <VStack w="33%" spacing={6} p="40px 20px">
          <Box textStyle="icon">
            <RiComputerLine />
          </Box>
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
          h="400px"
          spacing={6}
          p="40px 20px"
          borderRight=" 1px solid #E6ECF8"
          borderLeft=" 1px solid #E6ECF8"
        >
          <Box textStyle="icon">
            <IoServerOutline />
          </Box>
          <h4>Back-End</h4>
          <List>
            <ListItem>NodeJS</ListItem>
            <ListItem>Express</ListItem>
            <ListItem>NoSQL</ListItem>
          </List>
        </VStack>
        <VStack w="33%" spacing={6} p="40px 20px">
          <Box textStyle="icon">
            <GiPerspectiveDiceSixFacesRandom />
          </Box>
          <h4>Others</h4>
          <List>
            <ListItem>Redux</ListItem>
            <ListItem>GraphQL</ListItem>
            <ListItem>REST API</ListItem>
          </List>
        </VStack>
      </HStack>
    </>
  );
};

export default Tech;
