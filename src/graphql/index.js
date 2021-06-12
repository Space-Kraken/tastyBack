import { makeExecutableSchema } from "graphql-tools";
import lodash from "lodash";

import { preset } from "./modules/default/index.js";
import { Requester } from "./modules/Requesters/index.js";
import { Scholarship } from "./modules/Scholarships/index.js";
import { scholarshipType } from "./modules/ScholarshipsType/index.js";
import { File } from "./modules/Files/index.js";

const resolvers = {};

export const schema = makeExecutableSchema({
  typeDefs: [
    preset.typeDef,
    Requester.typeDef,
    Scholarship.typeDef,
    scholarshipType.typeDef,
    File.typeDef,
  ],
  resolvers: lodash.merge(
    resolvers,
    preset.resolvers,
    Requester.resolvers,
    Scholarship.resolvers,
    scholarshipType.resolvers,
    File.resolvers
  ),
});
