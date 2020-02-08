// Update with your config settings.

/*

Contains instructions for knex to 
connect to the database

Each key on the exported object has the
configuration for a database environment

*/

module.exports = {

  development: {
    client: 'sqlite3', // the db driver
    useNullAsDefault: true, // only needed for SQLite3
    connection: {
      filename: './data.produce.db3' // where is db file
    }
  },

  migrations: {
    directory: './data/migrations'
  },

  seeds: {
    directory: './data/seeds'
  }

};
