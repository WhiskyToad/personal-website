import React from "react";
import { motion } from "framer-motion";

import { Button, Box, HStack, VStack, Image, Text } from "@chakra-ui/react";

import "./styles.scss";

const variants = {
  left: {
    x: "-1500px",
  },
  right: {
    x: "1500px",
  },
  leftEnd: {
    x: 0,
    transition: {
      delay: 0.8,
    },
  },
  rightEnd: {
    x: 0,
    transition: {
      delay: 1.2,
    },
  },
};

const Landing = () => {
  return (
    <>
      <div class="page-bg">
        <div class="animation-wrapper">
          <div class="particle particle-1"></div>
          <div class="particle particle-2"></div>
          <div class="particle particle-3"></div>
          <div class="particle particle-4"></div>
        </div>
      </div>
      <div class="page-wrapper">
        <VStack h="100vh" mx="auto" justify="space-between">
          <HStack mt="40px" w="80%" justify="space-between">
            <Button variant="contact">
              <Text>Other</Text>
            </Button>
            <Button variant="contact">
              <Text>Contact</Text>
            </Button>
          </HStack>
          <VStack mb="20%" color="white">
            <motion.div variants={variants} initial="left" animate="leftEnd">
              <HStack>
                <h2>Hello there, I'm </h2>
                <Box>
                  <h1>Steven Craig.</h1>
                </Box>
              </HStack>
            </motion.div>
            <motion.div variants={variants} initial="right" animate="rightEnd">
              <h2>A full-stack web developer.</h2>
            </motion.div>
          </VStack>
        </VStack>
      </div>
    </>
  );
};

export default Landing;
