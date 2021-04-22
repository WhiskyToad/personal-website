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
      justify={{ md: "space-between", base: "center" }}
      wrap="wrap"
    >
      <Image
        fit="cover"
        h={{ md: "390px", base: "320px" }}
        borderRadius="10px"
        my="10px"
        src={one}
        alt="me on my bike"
      />
      <Image
        fit="cover"
        h={{ md: "390px", base: "320px" }}
        borderRadius="10px"
        my="10px"
        src={two}
        alt="me on my bike"
      />
      <Image
        fit="cover"
        h={{ md: "390px", base: "320px" }}
        borderRadius="10px"
        my="10px"
        src={three}
        alt="me on my bike"
      />
    </HStack>
  );
};

export default ImgSegment;
