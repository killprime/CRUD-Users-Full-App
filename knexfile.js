// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    migrations: {
      directory: 'config/db/migrations',
    },
    seeds: {
      directory: 'config/db/seeds',
    },
    connection:  process.env.DATABASE_URL
  },
  test: {
    client: 'pg',
    migrations: {
      directory: 'config/db/migrations',
    },
    seeds: {
      directory: 'config/db/seeds',
    },
    connection: process.env.DATABASE_TEST_URL
  },
  production: {
    client: 'pg',
    migrations: {
      directory: 'config/db/migrations',
    },
    seeds: {
      directory: 'config/db/seeds',
    },
    connection: process.env.DATABASE_URL
  },

};
