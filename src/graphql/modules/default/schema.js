import { gql } from "apollo-server";

export const typeDef = gql`
  type Query {
    greet: String!
  }
  type Mutation {
    greetPerson(name: String!): String!
  }
`;
