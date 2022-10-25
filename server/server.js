require("dotenv").config()

const express = require("express");
// const getAllLists = require("./handler/function")
const app = express();


const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/", express.static("/public"));

//Routes

// home page
app.get("/", (req, res) => {
  res.send("Hello World from server.js")
})


// showing all lists
app.get("/api/lists", async (req, res) => {
  await getAllLists()
    .then(response => res.send(response))
})

// app.post("/api/post", (req, res) => {
//   req.on("data", (data) => {

//   })

//   res.send("data sent successfully")
// })

app.listen(PORT, () => {
  console.log(`listening on port : ${PORT}`);
});
