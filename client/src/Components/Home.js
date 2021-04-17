import React from "react";
import {
  Text,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import About from "./About";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <Box w="100%" textAlign="center" background="black" color="white">
        <Text
          fontFamily="Neoneon"
          fontSize={["60px", "60px", "80px", "80px"]}
          pt="10px"
          color="teal"
        >
          Steven Craig
        </Text>
      </Box>
      <Tabs
        size="lg"
        bg="black"
        color="white"
        align="center"
        colorScheme="teal"
        fontFamily="BebasNeue"
      >
        <TabList>
          <Tab fontSize={["25px", "25px", "40px", "40px"]}>About</Tab>
          <Tab fontSize={["25px", "25px", "40px", "40px"]}>Projects</Tab>
        </TabList>

        <TabPanels bg="white" color="black">
          <TabPanel>
            <About />
          </TabPanel>
          <TabPanel>
            <Projects />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Home;
