const { sequelize, Sequelize } = require('../db')

  const SalaryModel = sequelize.define('salaries', {
    empNo: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    salary: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    fromDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    toDate: {
      type: Sequelize.DATE,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    timestamps: false,
    underscored: true
  });

module.exports = { SalaryModel };
