import fs from "fs";
import { Amazon } from "./../AWS/aws.js";

export const fileHandler = {
  uploadOnBucket: async (upload, ctx) => {
    console.log(upload.file);
    const { createReadStream, filename, mimetype } = await upload.file;
    const fileStream = createReadStream();
    const bucketResponse = await UploadFile(
      { fileStream, filename, mimetype },
      ctx
    );
    return bucketResponse;
  },
  createBucketDir: (dirname) => {
    Amazon.s3.putObject(
      {
        Bucket: "mrdonut-tastybucket",
        Key: `scholarships/${dirname}/`,
      },
      (err, data) => {
        if (err) return false;
        else return true;
      }
    );
  },
};

const UploadFile = async ({ fileStream, filename, mimetype }, ctx) => {
  const response = await Amazon.s3
    .upload(
      {
        Bucket: "mrdonut-tastybucket",
        Key: `scholarships/${ctx.id}/${ctx.name}.pdf`,
        Body: fileStream,
        ACL: "public-read",
        ContentType: "application/pdf",
      },
      (err, data) => {
        if (err) {
          return console.log(err);
        }
        if (data) {
          response = data.Body;
        }
      }
    )
    .promise();
  return response;
};
