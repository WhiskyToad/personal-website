import React, { useRef } from "react";
import {
  Box,
  Image,
  Text,
  Link,
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { projects } from "./data";

const Projects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Flex flexWrap="wrap" minW="75%" justifyContent="center">
        {projects.map((project, index) => (
          <>
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
              onClick={onOpen}
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
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
              size="xl"
            >
              <DrawerOverlay>
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Create your account</DrawerHeader>

                  <DrawerBody>Here</DrawerBody>

                  <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                      Close
                    </Button>
                  </DrawerFooter>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
          </>
        ))}
      </Flex>
    </>
  );
};

export default Projects;
