// Import the required modules
const bodyparser = require("body-parser");
const cors = require("cors");
const express = require("express");

// Create a router instance
const router = express.Router();

// Import the expenses controller module
const expensesController = require("../controllers/expenses");

// Enable CORS
router.use(cors());

// Parse request body as JSON
router.use(bodyparser.json());

// Define routes and their corresponding controller functions
router.post("/addexpenses", expensesController.addexpenses);
router.get("/getexpenses", expensesController.getexpenses);
router.use("/deleteexpenses/:id", expensesController.deleteexpenses);
router.use("/editexpenses/:id", expensesController.editexpenses);
router.get("/sumofprices", expensesController.sumofexpenses);
router.get("/", expensesController.getexpensesform);

// Export the router module
module.exports = router;