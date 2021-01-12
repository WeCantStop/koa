const { sequelize, Sequelize } = require('../db')

  const EmployTitleModel = sequelize.define('titles', {
    empNo: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
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

module.exports = { EmployTitleModel };
