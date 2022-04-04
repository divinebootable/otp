// Update with your config settings.
require("dotenv").config();

module.exports = {
  
   production: {
    client: "pg",
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },

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
    connectionString: process.env.connection,
    ssl: {
      rejectUnauthorized: process.env.ssl,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  }

};