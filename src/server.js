import { GraphQLServer } from "graphql-yoga";
import { schema } from "./graphql/index.js";
import { context } from "./database.js";
export const server = new GraphQLServer({
  uploads: false,
  schema,
  context,
});
