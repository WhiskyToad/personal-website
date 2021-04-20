import React from "react";
import { Box, Text, HStack } from "@chakra-ui/react";

import { BsChevronDoubleDown } from "react-icons/bs";

import background from "./Images/kinlochleven1.jpg";

const Landing = () => {
  return (
    <>
      <Box
        h="100vh"
        backgroundImage={`url(${background})`}
        backgroundPosition={[
          "left center",
          "center center",
          "center center",
          "center center",
        ]}
        backgroundRepeat="no-repeat"
        bgSize="cover"
      >
        <HStack
          w="40%"
          bg="#222222"
          mx="auto"
          borderRadius="60px"
          color="white"
          fontSize="30px"
          justify="space-evenly"
        >
          <BsChevronDoubleDown className="bounce" />
          <Text
            fontFamily="Karantina"
            fontSize={["50px", "50px", "60px", "50px"]}
          >
            Steven Craig
          </Text>
          <BsChevronDoubleDown className="bounce" />
        </HStack>
      </Box>
    </>
  );
};

export default Landing;
