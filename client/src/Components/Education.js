import React from "react";
import { Text, HStack, VStack } from "@chakra-ui/react";

const Education = () => {
  return (
    <VStack py="2%" w="100%" bg="#fffbee">
      <Text textStyle="heading">Education</Text>

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
        Completed My first year of University before deciding that it wasnt for
        me, I would have much preffered to do an apprenticeship with
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
        Association of Lorry Loaders Manufacturers and Importers, the nationally
        recognised organistation for safety of lorry mounted cranes. I conduct
        training for drivers to achieve certification and also train up new
        recruits.
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
    </VStack>
  );
};

export default Education;
