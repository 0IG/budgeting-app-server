//Dependencies
const express = require("express");
const app = express();
const cors = require("cors");
const budgetController = require("./controllers/budget.controller");

require("dotenv").config();

//Port
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.OUR_PORT || 3003;

//___________________
//Middleware
//___________________

app.use(express.json()); // returns middleware that only parses JSON

// this allows any app/site from anywhere access your API. This is a great way to start to get things up and running. Later, add restrictions, as needed.
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/transactions", budgetController);

module.exports = app;
