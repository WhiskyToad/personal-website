import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import {
  Flex,
  Image,
  Text,
  Link,
  Button,
  HStack,
  VStack,
  Spacer,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";

import { projects } from "./Data/projects";

const Projects = () => {
  const [choice, setChoice] = useState(projects[0]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const MotionHStack = motion(HStack);

  const handleClick = (project) => {
    setChoice(project);
    onOpen();
  };

  //display for projects
  const ProjectCard = ({ project }) => {
    const [display, setDisplay] = useState(false);
    return (
      <MotionHStack
        position="relative"
        overflow="hidden"
        borderRadius="5px"
        w="340px"
        h="260px"
        m="15px"
        bg="black"
        cursor="pointer"
        ref={btnRef}
        onClick={() => handleClick(project)}
        onMouseEnter={() => setDisplay(true)}
        onMouseLeave={() => setDisplay(false)}
        whileHover={{ scale: 1.15, zIndex: "9999" }}
      >
        <Image
          w="100%"
          h="100%"
          objectFit="cover"
          position="absolute"
          top="0"
          left="0"
          opacity={display ? "0.25" : "0.6"}
          src={project.thumbnail}
          alt={project.title}
        />
        <VStack w="100%" textAlign="center" zIndex="9" p="10px" color="white">
          {display ? (
            <>
              <Text textStyle="excerpt" m="10px">
                {project.excerpt}
              </Text>
            </>
          ) : (
            <h5>{project.title}</h5>
          )}
        </VStack>
      </MotionHStack>
    );
  };

  return (
    <>
      <VStack
        maxW="1200px"
        mx="auto"
        my="200px"
        textAlign="center"
        spacing={10}
      >
        <h2>My Recent Projects</h2>
        <Flex direction={{ base: "column", lg: "row" }}>
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </Flex>
      </VStack>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xl"
      >
        <DrawerOverlay zIndex="99999">
          <DrawerContent textAlign="center">
            <Image
              src={choice.mockDisplay}
              alt={choice.title}
              borderBottom="1px solid teal"
            />
            <DrawerHeader textAlign="center">
              <h3>{choice.title}</h3>
            </DrawerHeader>

            <DrawerBody>
              <VStack h="100%">
                <Text>{choice.description}</Text>
                <Spacer />
                <HStack textStyle="links" w="30%" justify="space-evenly">
                  <Link
                    href={choice.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </Link>
                  <Link
                    href={choice.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Preview
                  </Link>
                </HStack>
              </VStack>
            </DrawerBody>
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Projects;
