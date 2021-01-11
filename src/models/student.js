const { sequelize, Sequelize } = require('../db')

  const StudentModel = sequelize.define('student', {
    classId: {
      type: Sequelize.STRING,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    studentId: {
      type: Sequelize.BIGINT,
      allowNull: false
    },
    gender: {
      type: Sequelize.CHAR,
      allowNull: false
    },
    createDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    graduation: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    graduationDate: {
      type: Sequelize.DATE,
      allowNull: true
    },
    deleteFlag: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    underscored: true
  });

module.exports = { StudentModel };
