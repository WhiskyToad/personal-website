import React from "react";

import About from "../Components/About";

import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Landing from "../Components/Landing";

import "./styles.css";

const Home = () => {
  return (
    <>
      <Landing />
      <About />
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
