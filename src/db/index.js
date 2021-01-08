const { dbConfig } = require('./config');
const Sequelize = require("sequelize");

const { database, user, password, host, dialect, pool } = dbConfig;
const sequelize = new Sequelize(database, user, password, { host, pool, dialect });

module.exports = { Sequelize, sequelize };
