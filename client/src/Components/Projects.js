import React from "react";
import { Box, Image, Text, Link, Flex } from "@chakra-ui/react";

import { projects } from "./data";

const Projects = () => {
  return (
    <>
      <Flex flexWrap="wrap" minW="75%" justifyContent="center">
        {projects.map((project, index) => (
          <Box
            w="400px"
            rounded="20px"
            overflow="hidden"
            boxShadow="dark-lg"
            bg="teal"
            color="white"
            m="20px"
            key={index}
          >
            <Image src={project.image} alt={project.title} />
            <Box p="10px">
              <Text fontSize="30px">{project.title}</Text>
              <Text mb="10px" fontSize="15px" fontFamily="open-sans">
                {project.description}
              </Text>
              <Link href={project.code} mr="20px" fontSize="20px">
                Code
              </Link>
              <Link href={project.preview} fontSize="20px">
                Preview
              </Link>
            </Box>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default Projects;
