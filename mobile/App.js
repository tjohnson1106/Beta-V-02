import React, { Component } from "react";
import { UIManager } from "react-native";
import { ApolloProvider } from "react-appollo";
import { ThemeProvider } from "styled-components";

import { store, client } from "./src/store";
import { colors } from "./src/utils/constants";
import Welcome from "./src/Components/Welcome";

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends Component {
  render() {
    return (
      <ApolloProvider store={store} client={client}>
        <ThemeProvider theme={colors}>
          <Welcome />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}
