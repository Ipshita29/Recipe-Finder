const ENV = require("./src/config/env");

module.exports = {
  schema: "./src/db/schema.js",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: ENV.DATABASE_URL,
  },
};
