const Sequelize = require("sequelize");
const db = require("../database");

const Candy = db.define("candy", {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 10
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: ""
  }
});

module.exports = Candy;
