import React from "react";

import { HStack, Image } from "@chakra-ui/react";

import one from "./Images/ImgSegment/one.jpg";
import two from "./Images/ImgSegment/two.jpg";
import three from "./Images/ImgSegment/three.jpg";

const ImgSegment = () => {
  return (
    <HStack
      maxW="1300px"
      mx="auto"
      py="75px"
      justify="space-between"
      wrap="wrap"
    >
      <Image
        fit="cover"
        h="390px"
        w="390px"
        borderRadius="10px"
        src={one}
        alt="me on my bike"
      />
      <Image
        fit="cover"
        h="390px"
        w="390px"
        borderRadius="10px"
        src={two}
        alt="me on my bike"
      />
      <Image
        fit="cover"
        h="390px"
        w="390px"
        borderRadius="10px"
        src={three}
        alt="me on my bike"
      />
    </HStack>
  );
};

export default ImgSegment;
