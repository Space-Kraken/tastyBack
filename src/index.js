import { server } from "./server.js";
import dotenv from "dotenv";

dotenv.config();

server.start({ port: process.env.PORT || 3100 }, ({ port }) => {
  console.log("Server on port", port);
});
