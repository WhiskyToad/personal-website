import React from "react";

import { Text, HStack, VStack } from "@chakra-ui/react";

const Work = () => {
  return (
    <VStack py="2%" w="100%" bgColor="white" id="work">
      <Text textStyle="heading" py="20px">
        Work History
      </Text>
      <HStack maxW="600px" justify="space-between">
        <VStack textStyle="subHeading" spacing={4} px="20px">
          <Text>Ian Craig Haulage</Text>
          <Text>2008-Present</Text>
        </VStack>
        <VStack>
          <Text textStyle="subHeading" py="10px">
            Various Roles
          </Text>
          <Text maxW="300px" mx="10px">
            I started as a part time mechanic whilst in college. Moved into
            driving and worked my way through learning every type of equipment
            available. Have worked in the office in various roles and also as a
            crane instructor with some other compliance based roles. In my time
            here I have been exposed to the inner workings as the company has
            grown to 100 staff.
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Work;
