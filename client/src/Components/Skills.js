import React from "react";
import { Box, Image, Text, HStack } from "@chakra-ui/react";

import { skills } from "./Data/skills";

const Skills = () => {
  return (
    <Box mx="auto" maxW="1000px" pt="80px" textAlign="center">
      <Text textStyle="heading" py="40px" id="skills">
        Skills
      </Text>
      <HStack maxW="1000px" wrap="wrap" justify="center">
        {skills.map((skill, index) => (
          <Image
            m="10px"
            h={{ base: "100px", md: "150px" }}
            key={index}
            src={skill.img}
            alt={skill.name}
          ></Image>
        ))}
      </HStack>
    </Box>
  );
};

export default Skills;
