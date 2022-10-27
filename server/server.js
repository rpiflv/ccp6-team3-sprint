require("dotenv").config();

const path = require("path");
const express = require("express");
const app = express();

//ROUTE for DATABASE

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

//ROUTE for FRONTEND
const {
  getAllLists,
  getAllItemsFromList,
  getUserData,
} = require("./handler/model");
app.use(express.json());

//app.get tests
app.get("/api", async (req, res) => {
  console.log("Hello World");
  await res.send("connected successfully.");
});

//GET METHOD

//user data
app.get("/api/user/:userId", async (req, res) => {
  const userId = Number(req.params.userId);
  await getUserData(userId).then((data) => {
    console.log(data);
    res.send(data);
  });
});

//all lists data
app.get("/api/lists", async (req, res) => {
  await getAllLists().then((data) => {
    console.log(data);
    res.send(data);
  });
});

//all items in list
app.get("/api/items/:listId", async (req, res) => {
  const listId = Number(req.params.listId);
  await getAllItemsFromList(listId).then((data) => {
    console.log(data);
    res.send(data);
  });
});

//

//
app.post("/api/create-list", (req, res) => {
  console.log(req.body);
  res.send(JSON.stringify(req.body));
  // res.send("HELLOOOO");
});

app.post("/api/add-item", (req, res) => {
  console.log(req.body);
  // res.send("This is working");
  res.send(JSON.stringify(req.body));
});

app.listen(PORT, () => {
  console.log(`listening on port : ${PORT}`);
});
