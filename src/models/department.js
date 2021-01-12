const { sequelize, Sequelize } = require('../db')

  const DepartmentModel = sequelize.define('departments', {
    deptNo: {
      type: Sequelize.CHAR,
      primaryKey: true
    },
    deptName: {
      type: Sequelize.CHAR,
    }
  }, {
    freezeTableName: true,
    timestamps: false,
    underscored: true
  });

module.exports = { DepartmentModel };
