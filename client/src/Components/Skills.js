import React from "react";
import { Box, Image, Text, HStack, VStack } from "@chakra-ui/react";

const Skills = () => {
  return (
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
        JavaScript | React + Redux | HTML5 | CSS3 | NodeJS | MongoDB | GitHub |
        Management Skills | Instructor | Highly Teachable
      </Text>
    </Box>
  );
};

export default Skills;
