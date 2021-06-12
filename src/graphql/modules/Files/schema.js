import { gql } from "apollo-server";

export const typeDef = gql`
  scalar Upload
  scalar ctx

  extend type Query {
    getAllFiles: [File]
    getScholarshipFiles(id: String!): [File]
  }
  extend type Mutation {
    addFile(file: Upload, ctx: ctx): File
  }
  type File {
    path: String
    name: String
    scholarshipId: Scholarship
  }
`;
