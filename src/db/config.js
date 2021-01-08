const dbConfig = {
  host: "localhost",
  user: "will",
  password: "apple",
  database: "school",
  dialect: 'mysql',
  pool: {
    max: 20,
    min: 5,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = { dbConfig };
