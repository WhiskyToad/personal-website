import React from "react";
import { Box, Image, Text, Link, Badge, Flex } from "@chakra-ui/react";

import BrewersDiary from "./Images/BrewersDiary.png";
import lartsy from "./Images/lartsy.png";
import memory from "./Images/memory.png";
import toadoo from "./Images/toadoo.png";
import calculator from "./Images/calculator.png";

const Projects = () => {
  return (
    <>
      <Flex flexWrap="wrap" minW="75%" justifyContent="center">
        <Box
          w="400px"
          rounded="20px"
          overflow="hidden"
          boxShadow="dark-lg"
          bg="teal"
          color="white"
          m="20px"
        >
          <Image src={BrewersDiary} alt="Brewers Diary cover" />
          <Box p="10px">
            <Text fontSize="30px">Brewers Diary</Text>
            <Badge
              variant="solid"
              rounded="full"
              fontSize="15px"
              px={3}
              m="2px"
            >
              React
            </Badge>
            <Badge
              variant="solid"
              rounded="full"
              fontSize="15px"
              px={3}
              m="2px"
            >
              Node
            </Badge>
            <Badge
              variant="solid"
              rounded="full"
              fontSize="15px"
              px={3}
              m="2px"
            >
              MongoDB
            </Badge>
            <Text mb="10px" fontSize="15px" fontFamily="open-sans">
              My long term project to create a recipe and brew log sharing
              website, I'm slowly building this out and adding more features,
              currently it is fully working for CRUD operations. One day I aim
              to bring this to full production.
            </Text>
            <Link
              href="https://github.com/WhiskyToad/brewers-diary"
              mr="20px"
              fontSize="20px"
            >
              Code
            </Link>
            <Link href="https://www.brewersdiary.com/recipes" fontSize="20px">
              Preview
            </Link>
          </Box>
        </Box>
        <Box
          w="400px"
          rounded="20px"
          overflow="hidden"
          boxShadow="dark-lg"
          bg="teal"
          color="white"
          m="20px"
        >
          <Image src={lartsy} alt="lartsy cover" />
          <Box>
            <Text fontSize="30px">Lartsy</Text>
            <Badge
              variant="solid"
              rounded="full"
              fontSize="15px"
              px={3}
              m="2px"
            >
              React
            </Badge>
            <Badge
              variant="solid"
              rounded="full"
              fontSize="15px"
              px={3}
              m="2px"
            >
              Redux
            </Badge>
            <Text mb="10px" fontSize="15px" fontFamily="open-sans">
              An example of a shop page, includes a meme generator (why not?).
              Was supposed to just be a shopping cart multi page function but I
              wanted to go beyond and try to teach myself a few more techniques
              including redux.
            </Text>
            <Link
              href="https://github.com/WhiskyToad/shopping-cart"
              mr="20px"
              fontSize="20px"
            >
              Code
            </Link>
            <Link
              href="https://whiskytoad.github.io/shopping-cart/#/"
              fontSize="20px"
            >
              Preview
            </Link>
          </Box>
        </Box>
        <Box
          w="400px"
          rounded="20px"
          overflow="hidden"
          boxShadow="dark-lg"
          bg="teal"
          color="white"
          m="20px"
        >
          <Image src={memory} alt="memory cover" />
          <Box>
            <Text fontSize="30px">Memory Game</Text>
            <Badge
              variant="solid"
              rounded="full"
              fontSize="15px"
              px={3}
              m="2px"
            >
              React
            </Badge>
            <Text mb="10px" fontSize="15px" fontFamily="open-sans">
              A little game of memory, pick each one only once! I tried to jazz
              it up and make it a bit more card and game like than what the
              inital project idea was looking for, oh and I got to include some
              ace mountain bike photos! Enjoyed the simplicity and problem
              solving to get 3 different cards with one not chosen!
            </Text>
            <Link
              href="https://github.com/WhiskyToad/memory-game"
              mr="20px"
              fontSize="20px"
            >
              Code
            </Link>
            <Link
              href="https://whiskytoad.github.io/memory-game"
              fontSize="20px"
            >
              Preview
            </Link>
          </Box>
        </Box>
        <Box
          w="400px"
          rounded="20px"
          overflow="hidden"
          boxShadow="dark-lg"
          bg="teal"
          color="white"
          m="20px"
        >
          <Image src={toadoo} alt="todo cover" />
          <Box>
            <Text fontSize="30px">ToaDoo List</Text>
            <Badge
              variant="solid"
              rounded="full"
              fontSize="15px"
              px={3}
              m="2px"
            >
              Vanilla JS
            </Badge>

            <Text mb="10px" fontSize="15px" fontFamily="open-sans">
              A simple todo list, added a dynamically created filter, animation
              for the sidebar and a hover over description. (and a stupid play
              on the name!)
            </Text>
            <Link
              href="https://github.com/WhiskyToad/toadoo-list"
              mr="20px"
              fontSize="20px"
            >
              Code
            </Link>
            <Link
              href="https://whiskytoad.github.io/toadoo-list"
              fontSize="20px"
            >
              Preview
            </Link>
          </Box>
        </Box>
        <Box
          w="400px"
          rounded="20px"
          overflow="hidden"
          boxShadow="dark-lg"
          bg="teal"
          color="white"
          m="20px"
        >
          <Image src={calculator} alt="calculator cover" />
          <Box>
            <Text fontSize="30px">Calculator</Text>
            <Badge
              variant="solid"
              rounded="full"
              fontSize="15px"
              px={3}
              m="2px"
            >
              Vanilla JS
            </Badge>

            <Text mb="10px" fontSize="15px" fontFamily="open-sans">
              Just a simple calculator, my first project I tried to make look
              nice for a portfolio.
            </Text>
            <Link
              href="https://github.com/WhiskyToad/odincalculator"
              mr="20px"
              fontSize="20px"
            >
              Code
            </Link>
            <Link
              href="https://whiskytoad.github.io/odincalculator"
              fontSize="20px"
            >
              Preview
            </Link>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Projects;
