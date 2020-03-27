const knex = require('knex');

const configuration = require('../../knexfile');

const databaseConfiguration =
  process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(databaseConfiguration);

module.exports = connection;
