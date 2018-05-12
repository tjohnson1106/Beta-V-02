import React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../utils/constants";

const Root = styled.View`
  height: 40;
  background-color: #c8e4e8;
  flex-direction: row;
`;

const Button = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ButtonText = styled.Text`
  font-size: 14;
  font-weight: 500;
  color: #39043d;
`;

function FeedCardBottom() {
  return (
    <Root>
      <Button>
        <MaterialCommunityIcons
          name="heart-outline"
          size={20}
          color="#39043D"
        />
        <ButtonText>3</ButtonText>
      </Button>

      <Button>
        <MaterialCommunityIcons
          name="twitter-retweet"
          size={20}
          color="#39043D"
        />
        <ButtonText>3</ButtonText>
      </Button>
    </Root>
  );
}

export default FeedCardBottom;
