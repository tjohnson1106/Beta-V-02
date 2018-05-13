import { gql } from "react-apollo";

export default gql`
  {
    getStorys {
      text
      _id
      createdAt
      favoriteCount
      imageUrl
      user {
        username
        avatar
        lastName
        firstName
      }
    }
  }
`;
