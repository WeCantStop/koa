const { sequelize, Sequelize } = require('../db')

  const GradeModel = sequelize.define('grade', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    leader: {
      type: Sequelize.STRING,
      allowNull: false
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

module.exports = { GradeModel };
