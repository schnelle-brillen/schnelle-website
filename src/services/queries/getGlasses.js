
import { gql } from 'apollo-boost';

export default gql`
{ 
    glasses {
      id
      name
      speed
      description
      salesLink
      image {
          url
      }
    }
} 
`