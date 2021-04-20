import React from "react";

import { Text, HStack, VStack } from "@chakra-ui/react";

const Work = () => {
  return (
    <VStack py="2%" w="100%" bgColor="white">
      <Text textStyle="heading">Work History</Text>
      <HStack w="600px" justify="space-between">
        <VStack textStyle="subHeading" spacing={4}>
          <Text>Ian Craig Haulage</Text>
          <Text>2008-Present</Text>
        </VStack>
        <VStack>
          <Text textStyle="subHeading">Various Roles</Text>
          <Text maxW="400px" mx="5px">
            I started as a part time mechanic whilst in college. Moved into
            driving and worked my way through learning every type of equipment
            available. Have worked in the office in various roles and also as a
            crane instructor with some other compliance based roles.
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Work;
