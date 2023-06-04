// Importing Sequelize Library
const Sequelize = require("sequelize");

// Connecting node.js with Database
const sequelize = new Sequelize("expenserecord", "root", "Chandravadiya@2003", {
  dialect: "mysql",
  host: "localhost",
});

// Creating Expenses Data schema
const Expenses = sequelize.define("expense", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  Type_of_Expense: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Exporting Expenses data schema
module.exports = Expenses;