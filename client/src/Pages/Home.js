import React from "react";

import { Box } from "@chakra-ui/react";

import Landing from "../Components/Landing";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Tech from "../Components/Tech";
import Blog from "../Components/Blog";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Landing />
      <Box bg="white" zIndex="-999">
        <About />
        <Skills />
        <Projects />
        <Tech />
        <Blog />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
