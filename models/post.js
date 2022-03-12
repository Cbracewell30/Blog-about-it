const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create post model
class Post extends model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allownull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allownull: false,
    },
    post_url: {
      type: DataTypes.STRING,
      allownull: false,
      validate: {
        isURL: true,
      },
    },
    user_id: {
      type: DataTypes.STRING,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  { sequelize, freezeTableName: true, underscored: true, modelName: "post" }
);

module.exports = Post;
