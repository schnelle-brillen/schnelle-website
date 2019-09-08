import { gql } from "apollo-boost";

export default gql`
  {
    quotes {
      id
      img {
        url
      }
      text
    }
  }
`;
