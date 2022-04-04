// Update with your config settings.
require("dotenv").config();
console.log(process.env);

module.exports = {
  production: {
    client: "postgres",
    connectionString: process.env.HEROKU_POSTGRESQL_BROWN_URL,
    ssl: { rejectUnauthorized: false },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },

  development: {
    client: "postgres",
    connectionString: process.env.HEROKU_POSTGRESQL_BROWN_URL,
    ssl: { rejectUnauthorized: false },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },

  testing: {
    client: "pg",
    connectionString: process.env.HEROKU_POSTGRESQL_BROWN_URL,
    ssl: {
      rejectUnauthorized: process.env.ssl,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },
};
