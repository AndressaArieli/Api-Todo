import express from "express";

const app = express();
app.use(express.json());

app.post("/taks", (req, res) => {
  

  res.status(201).json(item);
});







app.listen(3000);
