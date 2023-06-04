// Importing Path Core Module.
const path = require("path");

// Importing Sequelize Library
const Sequelize = require("sequelize");

// Connecting node.js with Database
const sequelize = new Sequelize("expenserecord", "root", "Chandravadiya@2003", {
  dialect: "mysql",
  host: "localhost",
});

// Importing Expense Model
const Expenses = require("../models/expense");

// Exports Addexpenses middleware function
exports.addexpenses = async (req, res) => {
  try {
    const name = req.body.name;
    const price = req.body.price;
    const type = req.body.type;

    await Expenses.create({
      Name: name,
      Price: price,
      Type_of_Expense: type
    });

    const expensesData = await Expenses.findAll();
    res.status(201).json(expensesData);

  } catch (err) {
    console.log("Error in adding and showing expenses: " + err);
  }
};

// Exports Getexpenses middleware function
exports.getexpenses = async (req, res) => {
  try {
    const expensesData = await Expenses.findAll();
    res.status(201).json(expensesData);
  } catch (err) {
    console.log("Not able to get data from the database.");
  }
};

// Exports Deleteexpenses middleware function
exports.deleteexpenses = async (req, res) => {
  try {
    const id = req.params.id;
    await Expenses.destroy({ where: { id: id } });

    const sum = await Expenses.sum("Price");
    res.json(sum);
  } catch (err) {
    console.log("Not able to delete: " + err);
  }
};

// Exports Editexpenses middleware function
exports.editexpenses = async (req, res) => {
  try {
    const id = req.params.id;
    await Expenses.destroy({ where: { id: id } });
    const sum = await Expenses.sum("Price");
    res.json(sum);
  } catch (err) {
    console.log("Not able to delete: " + err);
  }
};

// Exports Sumofexpenses middleware function
exports.sumofexpenses = async (req, res) => {
  const sum = await Expenses.sum("Price");
  res.json(sum);
};

// Exports Getexpensesform middleware function
exports.getexpensesform = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      console.log("Table is created...");
      res.sendFile(path.join(__dirname, "..", "views", "ExpenseApp.html"));
    })
    .catch((err) => {
      console.log(err);
    });
};
