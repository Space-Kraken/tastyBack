export const resolvers = {
  Query: {
    getAllRequesters: async (_parent, _args, { prisma }) => {
      return await prisma.requesters.findMany();
    },
    getRequester: async (_parent, { controlnumber }, { prisma }) => {
      return await prisma.requesters.findUnique({
        where: {
          controlnumber,
        },
      });
    },
  },
  Mutation: {
    enrolRequester: async (
      _parent,
      {
        name,
        lastname,
        gender,
        birthday,
        address,
        controlnumber,
        semester,
        carrer,
      },
      { prisma }
    ) => {
      const requesterExist =
        null ||
        (await prisma.requesters.findUnique({
          where: {
            controlnumber,
          },
        }));
      if (requesterExist) return requesterExist;
      const newRequester = await prisma.requesters.create({
        data: {
          name,
          lastname,
          gender,
          birthday,
          address,
          semester,
          controlnumber,
          carrer,
        },
      });
      return newRequester;
    },
  },
  Requester: {
    scholarships: async ({ id }, _args, { prisma }) => {
      return await prisma.scholarships.findMany({
        where: {
          requesterId: id,
        },
      });
    },
  },
};
