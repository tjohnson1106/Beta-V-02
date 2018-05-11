import React from "react";
import { ImageBackground } from "react-native";
import styled from "styled-components/native";

import FeedCardHeader from "./FeedCardHeader";

const CardContentContainer = styled.View`
  flex: 1;
`;

function FeedCard() {
  return (
    <ImageBackground
      source={require("../../../assets/Feed_Image_One.jpeg")}
      style={{
        minHeight: 200,
        width: "100%",
        shadowColor: "#444B52",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.1
      }}
    >
      <FeedCardHeader />
      <CardContentContainer />
    </ImageBackground>
  );
}

export default FeedCard;
