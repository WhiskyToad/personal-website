import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

import background from "./Images/kinlochleven1.jpg";

const Landing = () => {
  return (
    <>
      <Box
        minH="100vh"
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
        <Box mx="auto" pt="5%" textAlign="center">
          <Text
            fontFamily={[
              "BebasNeue",
              "BebasNeue",
              "DigitalOrange",
              "DigitalOrange",
            ]}
            fontSize={["50px", "50px", "100px", "100px"]}
          >
            Steven Craig
          </Text>
          <a href="#home">
            <Button
              fontFamily="BebasNeue"
              colorScheme="teal"
              size="lg"
              fontSize="30px"
            >
              I'm intrigued!
            </Button>
          </a>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
