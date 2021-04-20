import React, { useState, useRef, useEffect } from "react";
import { Text, HStack, Tooltip } from "@chakra-ui/react";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import About from "./About";
import Work from "./Work";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Landing from "./Landing";

import "./styles.css";

const Home = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    let header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div style={{ marginTop: sticky.offset }}>
      <Landing />
      <HStack
        maxW="700px"
        bg="#222222"
        mx="auto"
        borderRadius="60px"
        justify="space-evenly"
        className={`navbar${sticky.isSticky ? " sticky" : ""}`}
        ref={headerRef}
      >
        <Links />
        <Text textStyle="navBarTitle">Steven Craig</Text>
        <Links />
      </HStack>

      <About />
      <Work />
      <Education />
      <Projects />
      <Skills />
    </div>
  );
};

const Links = () => {
  return (
    <>
      <HStack
        color="white"
        justify="center"
        align="baseline"
        fontSize="40px"
        spacing={4}
      >
        <Tooltip hasArrow label="Linkedin profile" bg="teal" placement="top">
          <a href="https://www.linkedin.com/in/steven-craig-082717203/">
            <AiFillLinkedin />
          </a>
        </Tooltip>
        <Tooltip hasArrow label="Github link" bg="teal" placement="top">
          <a href="https://github.com/WhiskyToad">
            <AiFillGithub />
          </a>
        </Tooltip>
        <Tooltip hasArrow label="Email me" bg="teal" placement="top">
          <a href="mailto:stevencraig321@gmail.com">
            <AiOutlineMail />
          </a>
        </Tooltip>
      </HStack>
    </>
  );
};

export default Home;
