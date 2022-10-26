require("dotenv").config();

const path = require("path");
const express = require("express");
const app = express();

const { getAllLists } = require("./handler/function");

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));



app.use(express.json());

//Routes for Frontend


// for app.get and post tests
app.get("/api", async (req, res) => {
  console.log("Hello World");
  await res.send("connected successfully.")
})

app.get("/api/lists", async (req, res) => {
  await getAllLists()
    .then(response => res.json(response))
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

app.post("/api/create-list", (req, res) => {
  res.send(JSON.stringify(req.body));
});

// we might do not need this middleware
// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// })

app.listen(PORT, () => {
  console.log(`listening on port : ${PORT}`);
});
