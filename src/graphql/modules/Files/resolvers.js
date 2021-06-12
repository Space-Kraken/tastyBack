import { tools } from "./../../../tools/index.js";

export const resolvers = {
  Query: {
    getAllFiles: async (_parent, _args, { prisma }) => {
      return await prisma.files.findMany();
    },
    getScholarshipFiles: async (_parent, { id }, { prisma }) => {
      return await prisma.files.findMany({
        where: {
          id,
        },
      });
    },
  },
  Mutation: {
    addFile: async (_parent, { file, ctx }, { prisma }) => {
      tools.fileHandler.createBucketDir(ctx.id);
      const upload = await tools.fileHandler.uploadOnBucket(file, ctx);
      console.log("test response");

      const newFile = await prisma.files.create({
        data: {
          path: upload.Location,
          name: ctx.name,
          scholarshipId: parseInt(ctx.id),
        },
      });
      console.log(newFile);
      return newFile;
    },
  },
};

// const createdir = (name) => {
//   tools.Amazon.s3.putObject(
//     {
//       Bucket: "mrdonut-tastybucket",
//       Key: `scholarships/${name}/`,
//     },
//     (err, data) => {
//       if (err) return false;
//       else return true;
//     }
//   );
// };

// const uploadFile = (name) => {
//   tools.Amazon.s3.upload(
//     {
//       Bucket: "mrdonut-tastybucket",
//       Key: `scholarships/${name}/${file}`,
//     },
//     (err, data) => {
//       if (err) return false;
//       else return true;
//     }
//   );
// };
