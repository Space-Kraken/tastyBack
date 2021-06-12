export const resolvers = {
  Query: {
    getAllScholarships: async (_parent, _args, { prisma }) => {
      return await prisma.scholarships.findMany();
    },
    getScholarship: async (_parent, { id }, { prisma }) => {
      return await prisma.scholarships.findUnique({
        where: {
          id,
        },
      });
    },
  },
  Mutation: {
    createNewScholarship: async (
      _parent,
      { type, requesterId },
      { prisma }
    ) => {
      const newScholarship = await prisma.scholarships.create({
        data: {
          typeId: type,
          requesterId,
        },
      });
      return newScholarship;
    },
  },
  Scholarship: {
    typeId: async ({ typeId }, _args, { prisma }) => {
      return await prisma.scholarshipType.findUnique({
        where: {
          id: typeId,
        },
      });
    },
    requesterId: async ({ requesterId }, _args, { prisma }) => {
      return await prisma.requesters.findUnique({
        where: {
          id: requesterId,
        },
      });
    },
    files: async ({ id }, _args, { prisma }) => {
      return await prisma.files.findMany({
        where: {
          scholarshipId: id,
        },
      });
    },
  },
};
