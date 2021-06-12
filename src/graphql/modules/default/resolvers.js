export const resolvers = {
  Query: {
    greet: () => "Hello world!",
  },
  Mutation: {
    greetPerson: (_, { name }, context) => {
      console.log(context);
      return `Hello ${name}`;
    },
  },
};
