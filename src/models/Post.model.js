const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/Sequelize");

const Post = sequelize.define("post", {
  post_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV1,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    get: function () {
      return JSON.parse(this.getDataValue("content"));
    },
    set: function (value) {
      return this.setDataValue("content", JSON.stringify(value));
    },
  },
  summary: {
    type: DataTypes.STRING,
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  is_published: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = Post;
