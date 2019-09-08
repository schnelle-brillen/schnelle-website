import gql from "graphql-tag";

export default gql`
  mutation CreateOrder(
    $firstname: String!
    $lastname: String!
    $email: String!
    $address: String!
    $housenr: String!
    $city: String!
    $zip: String!
    $paymentInfo: String!
  ) {
    createOrder(
      input: {
        data: {
          Firstname: $firstname
          Lastname: $lastname
          PaymentInfo: $paymentInfo
          Email: $email
          Housenr: $housenr
          Address: $address
          City: $city
          Zip: $zip
        }
      }
    ) {
      order {
        id
      }
    }
  }
`;
