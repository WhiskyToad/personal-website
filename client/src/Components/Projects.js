import React, { useRef, useState } from "react";
import {
  Box,
  Image,
  Text,
  Link,
  Flex,
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
            cursor="pointer"
            key={index}
            ref={btnRef}
            onClick={() => handleClick(project)}
          >
            <Image src={project.image} alt={project.title} h="200px" />
            <Box p="10px">
              <Text fontSize="30px">{project.title}</Text>
            </Box>
          </Box>
        ))}
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="xl"
        >
          <DrawerOverlay>
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
                    <Link to={choice.code}>Code</Link>
                    <Link to={choice.preview}>Preview</Link>
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
      </Flex>
    </>
  );
};

export default Projects;
