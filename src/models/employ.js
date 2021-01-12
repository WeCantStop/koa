const { sequelize, Sequelize } = require('../db')

  const EmployModel = sequelize.define('employees', {
    empNo: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    birthDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    gender: {
      type: Sequelize.ENUM(['M', 'F']),
      allowNull: false
    },
    hireDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    underscored: true
  });

module.exports = { EmployModel };
