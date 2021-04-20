import React from "react";
import { Text, HStack, VStack } from "@chakra-ui/react";

import { education } from "./Data/education";

const Education = () => {
  return (
    <VStack w="100%" bg="#fffbee">
      <Text textStyle="heading">Education</Text>

      {education.map((course, index) => (
        <HStack
          w="600px"
          justify="space-between"
          borderBottom="1px solid teal"
          py="30px"
          key={index}
        >
          <VStack textStyle="subHeading" spacing={4}>
            <Text>{course.course}</Text>
            <Text>{course.location}</Text>
            <Text>{course.year}</Text>
          </VStack>

          <Text maxW="300px" mx="5px">
            {course.description}
          </Text>
        </HStack>
      ))}
    </VStack>
  );
};

export default Education;
