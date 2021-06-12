import { gql } from "apollo-server";

export const typeDef = gql`
  scalar DataTime
  extend type Query {
    getAllRequesters: [Requester]
    getRequester(controlnumber: String!): Requester
    countRequesters: String!
  }
  extend type Mutation {
    enrolRequester(
      name: String!
      lastname: String!
      gender: String!
      birthday: DataTime!
      address: String!
      controlnumber: String!
      semester: String!
      carrer: String!
    ): Requester
  }

  type Requester {
    id: Int!

    # Public information
    name: String!
    lastname: String!
    gender: String!

    # Public information
    birthday: DataTime!
    address: String!

    # School information
    controlnumber: String!
    semester: String!
    carrer: String!

    # Requested scholarships
    scholarships: [Scholarship]
  }
`;
