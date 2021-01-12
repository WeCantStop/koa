const dbConfig = {
  host: "localhost",
  user: "will",
  password: "apple",
  database: "employees",
  dialect: 'mysql',
  pool: {
    max: 20,
    min: 5,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = { dbConfig };
