import React from "react";
import { Box, Text, HStack, VStack, Tooltip } from "@chakra-ui/react";
import { GiFrogPrince } from "react-icons/gi";

const Footer = () => {
  return (
    <VStack bg="purple">
      <GiFrogPrince />
      <Text>Created by WhiskyToad</Text>
      <Text>Built on React. Styled by Chakra UI.</Text>
    </VStack>
  );
};

export default Footer;
