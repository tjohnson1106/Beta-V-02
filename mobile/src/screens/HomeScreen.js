import React, { Component } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

import colors from "../utils/constants";
import FeedCard from "../components/feedcard/FeedCard";

const Root = styled.View`
  background-color: #f2f2f2;
  flex: 1;
  padding-top: 5;
  shadow-color: ${props => props.theme.SECONDARY};
  shadow-offset: 0px 2px;
  shadow-radius: 2;
  shadow-opacity: 0.1;
`;

const List = styled.ScrollView``;

class HomeScreen extends Component {
  render() {
    return (
      <Root>
        <List>
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </List>
      </Root>
    );
  }
}

export default HomeScreen;
