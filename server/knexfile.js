// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection:  process.env.DATABASE_URL
  },
  test: {
    client: 'pg',
    connection: process.env.DATABASE_TEST_URL
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },

};
