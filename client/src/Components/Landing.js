import React from "react";
import { motion } from "framer-motion";

import { Box, HStack, VStack } from "@chakra-ui/react";

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
      delay: 1.0,
    },
  },
  rightEnd: {
    x: 0,
    transition: {
      delay: 2.0,
    },
  },
};

const Landing = () => {
  return (
    <>
      <div className="page-bg">
        <div className="animation-wrapper">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>

        <div className="page-wrapper">
          <VStack h="100vh" justify="center" align="center" color="white">
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
        </div>
      </div>
    </>
  );
};

export default Landing;
