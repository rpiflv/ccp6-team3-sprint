require('dotenv').config()

const path = require("path");
const express = require("express");
const app = express();

// const getAllLists = require("./handler/function")

const PORT = process.env.PORT || 3000;

//Route for Frontend
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
})

app.use(express.json());

// for app.get and post tests
app.get("/api", (req, res) => {
  console.log("Hello World");
  res.send("connected successfully.")
})

app.post("/api/post", (req, res) => {
  req.on("data", (data) => {
    data = JSON.parse(data);
  })

  res.json(data);
})

//Get all lists
// app.get("/api/lists", async (req, res) => {
//   await getAllLists()
//     .then(response => res.send(response))
// });

// app.post("/api/post", (req, res) => {
//   req.on("data", (data) => {
//   })
//   res.send("data sent successfully")
// })

app.listen(PORT, () => {
  console.log(`listening on port : ${PORT}`);
});
