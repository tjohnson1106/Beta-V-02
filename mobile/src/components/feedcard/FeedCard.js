import React from "react";
import { ImageBackground } from "react-native";
import styled from "styled-components/native";

import colors from "../../utils/constants";
import FeedCardHeader from "./FeedCardHeader";
import FeedCardBottom from "./FeedCardBottom";

const CardContentContainer = styled.View`
  flex: 1;
  padding: 10px 20px 10px 5px;
`;

const CardContentText = styled.Text`
  font-size: 14;
  font-variant: small-caps;
  text-align: left;
  color: ${props => props.theme.SECONDARY};
`;

const text = "Lorem Ispum Blah Black Jack";

function FeedCard() {
  return (
    <ImageBackground
      source={require("../../../assets/Feed_Image_One.jpeg")}
      style={{
        minHeight: 220,
        width: "100%",
        shadowColor: "#444B52",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.1
      }}
    >
      <FeedCardHeader />
      <CardContentContainer>
        <CardContentText>{text}</CardContentText>
      </CardContentContainer>
      <FeedCardBottom />
    </ImageBackground>
  );
}

export default FeedCard;
