import express from "express";
import {} from "./handler/function.js"
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/", express.static("/public"));

app.get("/", (req, res) => {
  res.send("Hello World from server.js")
})

app.get("/api/get", (req, res) => {
  res.send("All lists")
})

app.post("/api/post", (req, res) => {
  req.on("data", (data) => {

  })
  
  res.send("data sent successfully")
})

app.listen(PORT, () => {
  console.log(`listening on port : ${PORT}`);
});
