const express = require("express");
const cors = require("cors");
const DataBaseConnecton = require("./Config/db");
const { TodoRoute } = require("./Controller/TodoController.js");
const app = express();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3050;

app.use("/todo", TodoRoute);

app.get("*", (req, res) => {
  res.send("Not found");
});
app.get("/",(req,res)=>{
  res.send("Welcome my todo api")
})
DataBaseConnecton();
app.listen(PORT, () => {
  try {
    console.log("listening PORT");
  } catch (error) {
    console.log("error");
  }
});
