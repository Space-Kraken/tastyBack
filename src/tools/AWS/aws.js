import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: "ASIA32RDGR2D5GAM6XOV",
  secretAccessKey: "Q3gKw2iZ1zgw5hQEeG59EZHUNCsvitlvgPuGHBFc",
  sessionToken:
    "FwoGZXIvYXdzECUaDEIBvDoJf13CzGl/syLIAa3DzuqHYQtSNtE/AJCiycFEtH8XJz/y+qgnA74b/bIpu2iRbFiicQj5KZQ7GRXeOlmg8nBuOJdpRL3bVzmd3VM0OuZgjrWPGvDhZ9dOhGrTEo/r595JqAa89mV+bKYKWjFB2xB+A4NY67JVzhyMQ6mmxHQ7ncujRwkc1fBImgwj70XCPLEFqwIwqs5F1EJHFgHvofqdbPMNBwrdlEVPA2VSiIUFf3S45cTCbbagNfuwwcZike4OOsH4cP5PvyaLitTJjEWdTM3WKJzckIYGMi2aDF81Wbj9l1Pd2z195esKCgLSGH3Hx/QcNyae6/e8aFGMmPAnJJ5rQjDFit0=",
});

AWS.config.region = "us-east-1";

const s3 = new AWS.S3();

export const Amazon = {
  AWS,
  s3,
};
