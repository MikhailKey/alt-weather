import { gql } from '@apollo/client';

export const GET_TOWN_WINDOW = gql`
  mutation GetTownCard($key: String!, $lat: String!, $lon: String!) {
    getTownCard(key: $key, lat: $lat, lon: $lon)
      @rest(
        type: "dailyTown"
        path: "onecall?lat={args.lat}&lon={args.lon}&exclude=hourly,minutely&units=metric&appid={args.key}"
        method: "GET"
      ) {
      daily
    }
  }
`