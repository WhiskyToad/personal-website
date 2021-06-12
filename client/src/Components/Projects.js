import React, { useRef, useState } from "react";

import {
  Grid,
  Box,
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

  const handleClick = (project) => {
    setChoice(project);
    onOpen();
  };

  return (
    <>
      <VStack maxW="1200px" mx="auto" textAlign="center">
        <h2>My Recent Projects</h2>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {projects.map((project, index) => (
            <Box
              w="380px"
              cursor="pointer"
              borderRadius="10px"
              overflow="hidden"
              key={index}
              ref={btnRef}
              onClick={() => handleClick(project)}
            >
              <Image src={project.image} alt={project.title} />
            </Box>
          ))}
        </Grid>
      </VStack>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xl"
      >
        <DrawerOverlay zIndex="99999">
          <DrawerContent>
            <Image
              src={choice.image}
              alt={choice.title}
              borderBottom="1px solid teal"
            />
            <DrawerHeader textStyle="heading" textAlign="center">
              {choice.title}
            </DrawerHeader>

            <DrawerBody>
              <VStack h="100%">
                <Text>{choice.description}</Text>
                <Spacer />
                <HStack
                  fontFamily="BebasNeue"
                  fontSize="2rem"
                  w="30%"
                  justify="space-evenly"
                >
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
