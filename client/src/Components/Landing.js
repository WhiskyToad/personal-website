import React from "react";
import { Box, Text, HStack, VStack, Spacer } from "@chakra-ui/react";

import { BsChevronDoubleDown } from "react-icons/bs";

import background from "./Images/kinlochleven1.jpg";

const Landing = () => {
  return (
    <>
      <Box
        h="100vh"
        mb="100px"
        backgroundImage={`url(${background})`}
        backgroundPosition={[
          "left center",
          "left center",
          "center center",
          "center center",
        ]}
        backgroundRepeat="no-repeat"
        bgSize="cover"
      >
        <VStack maxW="1100px" h="100vh" mx="auto" p="20px">
          <Text textStyle="neon" className="flicker">
            Steven Craig
          </Text>
          <Spacer />
          <HStack
            w="80%"
            textStyle="neonSmall"
            justify="space-between"
            className="bounce"
          >
            <Box>
              <BsChevronDoubleDown />
            </Box>
            <Text>Scroll down for more</Text>
            <BsChevronDoubleDown />
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default Landing;
