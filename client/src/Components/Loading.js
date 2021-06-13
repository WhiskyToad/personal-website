import React from "react";
import { TailSpin } from "react-loading-icons";
import { HStack } from "@chakra-ui/react";

const Loading = () => {
  return (
    <HStack h="100vh">
      <TailSpin />
    </HStack>
  );
};

export default Loading;
