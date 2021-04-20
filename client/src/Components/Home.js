import React, { useState, useRef, useEffect } from "react";
import { Text, HStack, Image, Box, VStack } from "@chakra-ui/react";

import Links from "./Links";
import About from "./About";
import Projects from "./Projects";
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
        w="50%"
        bg="#222222"
        mx="auto"
        borderRadius="60px"
        className={`navbar${sticky.isSticky ? " sticky" : ""}`}
        ref={headerRef}
      >
        <Links />
        <Text
          fontFamily="Karantina"
          fontSize={["50px", "50px", "60px", "60px"]}
          color="white"
        >
          Steven Craig
        </Text>
      </HStack>

      <About />

      <Projects />
    </div>
  );
};

export default Home;
