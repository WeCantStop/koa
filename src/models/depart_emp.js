const { sequelize, Sequelize } = require('../db')

  const DepartEmpModel = sequelize.define('dept_emp', {
    empNo: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    deptNo: {
      type: Sequelize.CHAR,
      primaryKey: true
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

module.exports = { DepartEmpModel };
