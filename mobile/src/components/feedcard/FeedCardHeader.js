import React from "react";
import styled from "styled-components";

import { fakeAvatar } from "../../utils/constants";

const AVATAR_SIZE = 40;
const AVATAR_RADIUS = AVATAR_SIZE / 2;

const Root = styled.View`
  height: 50;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
`;

const AvatarContainer = styled.View`
  flex: 0.2;
  justify-content: center;
  align-self: stretch;
  padding-right: 5;
`;

const Avatar = styled.Image`
  height: ${AVATAR_SIZE};
  width: ${AVATAR_SIZE};
  border-radius: ${AVATAR_RADIUS};
  border-color: white;
  border-width: 1;
`;

function FeedCardHeader() {
  return (
    <Root>
      <AvatarContainer>
        <Avatar source={{ uri: fakeAvatar }} />
      </AvatarContainer>
    </Root>
  );
}

export default FeedCardHeader;
