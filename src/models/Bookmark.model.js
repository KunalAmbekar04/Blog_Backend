const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/Sequelize");

const Bookmark = sequelize.define("bookmark", {
  post_id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
});

module.exports = Bookmark;
