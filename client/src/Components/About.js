import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

import headshot from "./Images/profilephoto.jpeg";

const About = () => {
  return (
    <>
      <Box mt="2%">
        <Image
          src={headshot}
          borderRadius="full"
          boxSize="250px"
          alt="Steven Craig"
        ></Image>
        <Text mt="2%" fontSize={["30px", "30px", "50px", "50px"]}>
          Web Developer
        </Text>
        <Text
          my="2%"
          fontSize={["20px", "20px", "30px", "30px"]}
          fontFamily="open-sans"
        >
          Driven | Hard-Working | Dynamic
        </Text>
      </Box>
      <Box py="2%" w="100%" bgColor="teal" color="white">
        <Text fontSize={["30px", "30px", "50px", "50px"]}>About Me</Text>
        <Text
          fontSize={["15px", "15px", "20px", "20px"]}
          maxW="950px"
          mx="5px"
          fontFamily="open-sans"
        >
          I am an aspiring web developer. I love creating things and solving
          problems. Hard working and determined, I am always seeking to learn
          new things and challenge myself. A self-starter I prefer to get a
          general outline of what needs done and then organise myself to
          complete the tasks. Have experience of working in small teams as well
          as lone work.
          <br></br>
          <br></br>
          My learning journey began in November 2019 when I completed a basic
          codeacademy Python course before purchasing Automate the Boring Stuff
          and coding along with that. From here I switched across to JavaScript
          for more career opportunities. I really enjoy the challenge of full
          stack development, I like being a jack of all trades and being self
          reliant in fixing and creating everything as much as possible. It was
          near the start of my web development course that I discovered that I
          REALLY enjoy software development, my mind has always been a very
          active monkey brain and the problems and challenges imposed by
          programming and the logical way of thinking just clicked with me and I
          finally feel I have found a hobby I can turn into a career.
        </Text>
      </Box>
      <Box py="2%" w="100%" bgColor="white">
        <Text fontSize={["30px", "30px", "50px", "50px"]}>Work History</Text>

        <Text fontSize={["20px", "20px", "30px", "30px"]} py="10px">
          Ian Craig Haulage | Various Roles | 2008-Present
        </Text>

        <Text
          fontSize={["15px", "15px", "20px", "20px"]}
          maxW="950px"
          mx="5px"
          fontFamily="open-sans"
        >
          From part time mechanic whilst still in school to transport manager,
          I've done it all. My current duties are as an instructor, compliance
          manager and HGV driver. In the time I've been there the company has
          grown over 50% in size to just under 100 employees.
        </Text>
      </Box>
      <Box py="2%" w="100%" bgColor="teal" color="white">
        <Text fontSize={["30px", "30px", "50px", "50px"]}>Education</Text>

        <Text fontSize={["20px", "20px", "30px", "30px"]}>
          The Odin Project | 2020
        </Text>

        <Text
          fontSize={["15px", "15px", "20px", "20px"]}
          maxW="950px"
          mx="5px"
          pt="20px"
          pb="40px"
          borderBottom="1px solid white"
          fontFamily="open-sans"
        >
          Full stack JavaScript course. This took me from knowing not much about
          Web Development to being confident in my abilities to complete most
          tasks and develop my own ideas into workable projects, teaching me
          various frameworks and technologies along the way.
        </Text>
        <Text fontSize={["20px", "20px", "30px", "30px"]} pt="20px">
          Civil Engineering | Heriot-Watt Uni | 09-10
        </Text>

        <Text
          fontSize={["15px", "15px", "20px", "20px"]}
          maxW="950px"
          mx="5px"
          pt="20px"
          pb="40px"
          borderBottom="1px solid white"
          fontFamily="open-sans"
        >
          Completed My first year of University before deciding that it wasnt
          for me, I would have much preffered to do an apprenticeship with
          qualifications instead, but the financial crash of 2008 ruined that
          hope.
        </Text>
        <Text fontSize={["20px", "20px", "30px", "30px"]} pt="20px">
          Civil Engineering HNC | Forth Valley College | 08-09
        </Text>

        <Text
          fontSize={["15px", "15px", "20px", "20px"]}
          maxW="950px"
          mx="5px"
          pt="20px"
          pb="40px"
          borderBottom="1px solid white"
          fontFamily="open-sans"
        >
          One year college course before moving up to University.
        </Text>
        <Text fontSize={["20px", "20px", "30px", "30px"]} pt="20px">
          Crane Instructor | ALLMI | 2019
        </Text>

        <Text
          fontSize={["15px", "15px", "20px", "20px"]}
          maxW="950px"
          mx="5px"
          pt="20px"
          pb="40px"
          borderBottom="1px solid white"
          fontFamily="open-sans"
        >
          Association of Lorry Loaders Manufacturers and Importers, the
          nationally recognised organistation for safety of lorry mounted
          cranes. I conduct training for drivers to achieve certification and
          also train up new recruits.
        </Text>
        <Text fontSize={["20px", "20px", "30px", "30px"]} pt="20px">
          Level 3 Award in Education and Training | PTLLS | 2018
        </Text>

        <Text
          fontSize={["15px", "15px", "20px", "20px"]}
          maxW="950px"
          mx="5px"
          pt="20px"
          pb="40px"
          fontFamily="open-sans"
        >
          A course on teaching you how to educate people going through the
          different ways on how people learn and how to conduct training.
        </Text>
      </Box>
      <Box bpy="2%" w="100%" bgColor="white">
        <Text fontSize={["30px", "30px", "50px", "50px"]}>Skills</Text>
        <Text
          fontSize={["15px", "15px", "20px", "20px"]}
          maxW="650px"
          mx="5px"
          pt="20px"
          pb="40px"
          borderBottom="1px solid white"
        >
          JavaScript | React + Redux | HTML5 | CSS3 | NodeJS | MongoDB | GitHub
          | Management Skills | Instructor | Highly Teachable
        </Text>
      </Box>
    </>
  );
};

export default About;
