export const resolvers = {
  Query: {
    getScholarshipsTypes: async (_parent, _args, { prisma }) => {
      return await prisma.scholarshipType.findMany();
    },
    getScholarshipsType: async (_parent, { type }, { prisma }) => {
      return await prisma.scholarshipType.findUnique({
        where: {
          type,
        },
      });
    },
  },
  Mutation: {
    addScholarshipType: async (_parent, { type }, { prisma }) => {
      const newType = await prisma.scholarshipType.create({
        data: {
          type,
        },
      });
      return newType;
    },
  },
};
