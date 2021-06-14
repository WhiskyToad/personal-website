import React from "react";
import { Text, HStack } from "@chakra-ui/react";
import { GiFrogPrince } from "react-icons/gi";

const Footer = () => {
  return (
    <HStack bg="#afddf1" justify="center" borderTop="2px solid black">
      <GiFrogPrince />
      <Text px="20px">A WhiskyToad creation</Text>
      <GiFrogPrince />
    </HStack>
  );
};

export default Footer;
