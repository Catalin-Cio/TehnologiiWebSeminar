const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Course = sequelize.define("course", {
  courseName: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Course;
