import { gql } from '@apollo/client';

export interface Rocket {
  id: string;
  description: string;
  name: string;
}

export interface ExampleQueryData {
  rockets: Rocket[];
}

export const GET_ROCKETS = gql`
  query ExampleQuery {
    rockets {
      id
      description
      name
    }
  }
`;
