const express = require("express");
const Todos = require("../Model/TodoModel.js");

const TodoRoute = express.Router();
TodoRoute.get("/", async (req, res) => {
  try {
    let data = await Todos.find();
    res.status(200).send(data);
  } catch (error) {
    console.log(error, "Todo Getting error");
  }
});

TodoRoute.post("/", async (req, res) => {
  try {
    await Todos.create(req.body);
    return res.send({
      status: "success",
    });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      data: "Internal Server Error",
    });
  }
});
TodoRoute.delete("/:id", async (req, res) => {
  try {
    await Todos.findByIdAndDelete(req.params.id);
    return res.status(200).send("Delete Successfully");
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

TodoRoute.patch("/:id", async(req, res) => {
  try {
    const Movies = await Todos.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send(Movies);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = { TodoRoute };
