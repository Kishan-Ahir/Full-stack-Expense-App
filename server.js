// Import the express module
const express = require("express");
const app = express();

// Import the expenses route module
const expensesRoute = require("./routes/expenses");

// Use the expenses route module
app.use(expensesRoute);

// Start the server and listen on port 3000
app.listen(3000);
