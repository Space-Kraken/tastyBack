import { gql } from "apollo-server";

export const typeDef = gql`
  extend type Query {
    getScholarshipsTypes: [ScholarshipType]
    getScholarshipsType: ScholarshipType
  }
  extend type Mutation {
    addScholarshipType(type: String!): ScholarshipType
  }
  type ScholarshipType {
    id: Int!
    type: String!
  }
`;
