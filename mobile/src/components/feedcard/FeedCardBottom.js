import React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../utils/constants";

const Root = styled.View`
  height: 40;
  background-color: pink;
  flex-direction: row;
`;

const Button = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-horizontal: 32px;
`;

const ButtonText = styled.Text`
  font-size: 14;
  font-weight: 500;
  color: ${props => props.theme.LIGHT_GRAY};
`;

function FeedCardBottom() {
  return (
    <Root>
      <Button>
        <MaterialCommunityIcons
          name="heart-outline"
          size={20}
          color="#CAD0D6"
        />
        <ButtonText>3</ButtonText>
      </Button>

      <Button>
        <MaterialCommunityIcons
          name="twitter-retweet"
          size={20}
          color="#CAD0D6"
        />
        <ButtonText>3</ButtonText>
      </Button>
    </Root>
  );
}

export default FeedCardBottom;
