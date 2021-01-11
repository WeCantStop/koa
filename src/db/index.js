const { dbConfig } = require('./config');
const Sequelize = require("sequelize");

const { database, user, password, host, dialect, pool } = dbConfig;
    logging: false
const sequelize = new Sequelize(database, user, password, { host, pool, dialect, 
  logging: false
});

module.exports = { Sequelize, sequelize };
