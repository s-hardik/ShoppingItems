const express = require("express");
const itemRoute = express.Router();
const items = [];
itemRoute
  .route("/items")
  .get((req, res) => {
    res.json(items);
  })
  .post((req, res) => {
    items.push(req.body);
    res.status(201).json("item added to cart");
  });
itemRoute
  .route("/items/:id")
  .get((req, res) => {
    const item = items.find((ele) => ele.genre === req.params.id);

    res.json(item);
  })
  .patch((req, res) => {
    const itemidx = items.findIndex((ele) => ele.genre === req.params.id);
    items[itemidx].author = req.body.author;
    res.sendStatus(204);
  })
  .delete((req, res) => {
    const itemidx = items.findIndex((ele) => ele.genre === req.params.id);
    items.splice(itemidx, 1);
    res.sendStatus(204);
  });

module.exports = itemRoute;
