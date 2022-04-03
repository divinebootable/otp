// Update with your config settings.

require("dotenv").config();

module.exports = {
   production: {
    client: "pg",
    connectionString: process.env.DATABASE_URL,
    dialectOptions: {
    ssl: { rejectUnauthorized: false },
  },
    migrations: {
      directory: "./migrations",
    },
    seeds: { directory: "./data/seeds" },
  },

 development: {
    client: "pg",
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
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

 

};
