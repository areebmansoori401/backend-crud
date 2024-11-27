import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectdb from "./src/db/index.js";
import router from "./src/routes/todos.router.js";
const app = express();
import cors from "cors";
const port = process.env.PORT;

app.use(express.json());
app.use("/", router);
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Talha!");
});

connectdb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
