import { gql } from "apollo-server";

export const typeDef = gql`
  extend type Query {
    getAllScholarships: [Scholarship]
    getScholarship(id: String!): Scholarship
  }
  extend type Mutation {
    createNewScholarship(type: Int!, requesterId: Int!): Scholarship
  }
  type Scholarship {
    id: Int!
    typeId: ScholarshipType!
    approved: Boolean
    requesterId: Requester!
    files: [File]
  }
`;
