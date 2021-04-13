import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme/theme";
import Fonts from "./theme/font-face";

import Home from "./Components/Home";
import Landing from "./Components/Landing";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </HashRouter>
    </ChakraProvider>
  );
};

export default App;
