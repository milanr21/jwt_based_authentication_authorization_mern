import { config as conf } from "dotenv";

conf();

const _config = {
  port: process.env.PORT,
  databaseUrl: process.env.MONGODB_URI,
  env: process.env.NODE_ENV,
};

console.log(_config);

if (!_config.databaseUrl) {
  throw new Error(
    "MONGO_CONNECTION_STRING is not defined in the environment variables."
  );
}

export const config = _config;
