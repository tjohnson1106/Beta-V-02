import React, { Component } from "react";
import styled from "styled-components/native";

import colors from "../utils/constants";
import FeedCard from "../components/feedcard/FeedCard";

const Root = styled.View`
  background-color: #fff;
  flex: 1;
  justify-content: center;
  shadow-color: ${props => props.theme.SECONDARY};
  shadow-offset: 0px 2px;
  shadow-radius: 2;
  shadow-opacity: 0.1;
`;

const T = styled.Text``;

class HomeScreen extends Component {
  render() {
    return (
      <Root>
        <FeedCard />
      </Root>
    );
  }
}

export default HomeScreen;
