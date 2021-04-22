import React, { useState, useRef, useEffect } from "react";

import { Link } from "react-scroll";

import {
  Text,
  HStack,
  Tooltip,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import About from "./About";
import ImgSegment from "./ImgSegment";
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
    if (window.pageYOffset > elTopOffset + elHeight + 50) {
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
        zIndex="9999"
        className={`navbar${sticky.isSticky ? " sticky" : ""}`}
        ref={headerRef}
      >
        <Links />
        <Text textStyle="navBarTitle">Steven Craig</Text>
        <Menu>
          <MenuButton
            as={Button}
            w="120px"
            bg="#222222"
            color="white"
            textStyle="subHeading"
          >
            view
          </MenuButton>
          <MenuList textStyle="subHeading">
            <Link to="about" spy={true} smooth={true} offset={-70}>
              <MenuItem>About</MenuItem>
            </Link>
            <Link to="education" spy={true} smooth={true} offset={-70}>
              <MenuItem>Education</MenuItem>
            </Link>
            <Link to="work" spy={true} smooth={true} offset={-70}>
              <MenuItem>Work</MenuItem>
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-70}>
              <MenuItem>Projects</MenuItem>
            </Link>
            <Link to="skills" spy={true} smooth={true}>
              <MenuItem>Skills</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </HStack>

      <About />
      <ImgSegment />
      <Education />
      <Work />
      <Projects />
      <Skills />
    </div>
  );
};

//Navbar links
const Links = () => {
  return (
    <>
      <HStack
        color="white"
        justify="space-between"
        align="baseline"
        fontSize="30px"
        w="120px"
      >
        <Tooltip hasArrow label="Linkedin profile" bg="black">
          <a href="https://www.linkedin.com/in/steven-craig-082717203/">
            <AiFillLinkedin alt="linked in" />
          </a>
        </Tooltip>
        <Tooltip hasArrow label="Github link" bg="black">
          <a href="https://github.com/WhiskyToad">
            <AiFillGithub alt="github" />
          </a>
        </Tooltip>
        <Tooltip hasArrow label="Email me" bg="black">
          <a href="mailto:stevencraig321@gmail.com">
            <AiOutlineMail alt="email" />
          </a>
        </Tooltip>
      </HStack>
    </>
  );
};

export default Home;
