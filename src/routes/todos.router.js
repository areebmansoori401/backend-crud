import express from "express";
import {
  addTodo,
  getAllTodo,
  singleTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todos.controler.js";

const router = express.Router();

router.post("/todo", addTodo);
router.get("/todos", getAllTodo);
router.get("/todo/:id", singleTodo);
router.delete("/todo/:id", deleteTodo);
router.put("/todo/:id", updateTodo);

export default router;
