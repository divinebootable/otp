// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require("dotenv").config();

module.exports = {

 development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  },
    migrations: {
      directory: "./migrations",
    },
    seeds: { directory: "./data/seeds" },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  },
    migrations: {
      directory: "./migrations",
    },
    seeds: { directory: "./data/seeds" },
  },

};
