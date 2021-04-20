import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme/theme";
import Fonts from "./theme/font-face";

import Home from "./Components/Home";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
