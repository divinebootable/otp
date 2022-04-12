// Update with your config settings.
//require("dotenv").config({path: './env'});
module.exports = {
  development: {
    client: "pg",
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },

  testing: {
    client: "pg",
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },

   production: {
    client: "pg",
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },
};
