import { gql } from '@apollo/client';

export const GET_TOWN_CARD = gql`
  mutation getTownCard( $city: String!, $key: String! ) {
    response(city: $city, key: $key)
    @rest(
      path: "weather?q={args.city}&units=metric&appid={args.key}",
      method: "GET"
    ) {
      name 
      sys 
      coord
      main
      weather
    }
  }
`