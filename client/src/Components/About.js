import React from "react";
import { Image, Text, HStack, VStack } from "@chakra-ui/react";

import headshot from "./Images/profilephoto.jpeg";
const About = () => {
  return (
    <>
      <HStack
        mx="auto"
        pt="50px"
        maxW="1000px"
        justify="space-between"
        align="flex-start"
        id="about"
      >
        <Image
          src={headshot}
          borderRadius="full"
          boxSize="250px"
          alt="Steven Craig"
        />

        <VStack w="50%">
          <Text textStyle="heading">About Me</Text>
          <Text>
            I am an all round web developer. Lover of mountain bikes and problem
            solving. Very efficient, I always develop systems to do things
            faster and easier. Once I discovered JavaScript and web design I was
            obsessed, I love the challenge and the never-ending pursuit of
            mastery. A geek for the details, if you dare to then ask me about my
            bikes.
          </Text>
        </VStack>
      </HStack>
    </>
  );
};

export default About;
