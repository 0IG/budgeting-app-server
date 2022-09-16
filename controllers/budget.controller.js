const express = require("express");
const budget = express.Router();
const purchaseArray = require("../models/budget");

// Index
budget.get("/", (req, res) => {
  res.json(purchaseArray);
});
// Show
budget.get("/:id", (req, res) => {
  const { id } = req.params;
  if (purchaseArray[id]) {
    res.send(purchaseArray[id]);
  } else {
    res.redirect("*");
  }
});
// Create
budget.post("/", (req, res) => {
  purchaseArray.push(req.body);
  res.json(purchaseArray[purchaseArray.length - 1]);
});
// Delete
budget.delete("/:id", (req, res) => {
  const { id } = parseInt(req.params);
  purchaseArray.splice(id, 1);
  res.send(purchaseArray);
});
// Update
budget.put("/:id", (req, res) => {});

module.exports = budget;
