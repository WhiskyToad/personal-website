import React from "react";

import { Text, HStack, VStack } from "@chakra-ui/react";

const Work = () => {
  return (
    <VStack py="2%" w="100%" bgColor="white">
      <Text textStyle="heading">Work History</Text>

      <Text py="10px" textStyle="subHeading">
        Ian Craig Haulage | Various Roles | 2008-Present
      </Text>

      <Text maxW="950px" mx="5px">
        From part time mechanic whilst still in school to transport manager,
        I've done it all. My current duties are as an instructor, compliance
        manager and HGV driver. In the time I've been there the company has
        grown over 50% in size to just under 100 employees.
      </Text>
    </VStack>
  );
};

export default Work;
