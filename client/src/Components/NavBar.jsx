import React from "react";

import { Box, HStack, ListItem, UnorderedList } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <HStack bg="black" mx="auto" py="5px">
        <HStack minW="40%" mx="auto" justify="space-between">
          <Box
            bg="teal"
            w="50px"
            h="50px"
            borderRadius="50%"
            textAlign="center"
          >
            <h1>SC</h1>
          </Box>
          <HStack>
            <UnorderedList>
              <ListItem>About</ListItem>
              <ListItem>Projects</ListItem>
              <ListItem>Contact</ListItem>
            </UnorderedList>
          </HStack>
        </HStack>
      </HStack>
    </>
  );
};

export default NavBar;
