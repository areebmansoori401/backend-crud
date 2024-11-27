import mongoose from "mongoose";
import Todos from "../models/todos.model.js"


//todo add
const addTodo = async (req,res)=>{
const { title , description} = req.body;
    if(!title || !description){
        res.status(400).json({
            massage : "title and description are required"
        })
        return
    }

    const todo = await Todos.create({
        title,
        description
    })
    res.status(201).json({
        massage : "todo added successfully",
        data : todo
    })
}

//get all todo
const getAllTodo = async (req,res)=>{
   try {
    const todos = await Todos.find({})
    res.status(200).json({
        todos:todos
    })
   } catch (error) {

    console.log(error.message);
    res.status(500).json({
    message: "Failed to fetch todos",
    error: error.message,
    })
    
   }
}

//single todo
const singleTodo = async (req,res)=>{
    const {id} =  req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            massage : "Not valid ID"
        })
    }

    try {
        const todo = await Todos.findById(id)

        if(!todo){
            res.status(400).json({
                massage:'todo Not found'
            })
            return
        }

        res.status(200).json({
            todo:todo
        })

    } catch (error) {

        console.log(error.message);
        res.status(500).json({
            message: "Failed to fetch todo",
            error: error.message,
        })
        
    }
}

//delete todo
const deleteTodo = async (req,res)=>{
    try {
        const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return response.status(400).json({
            massage : "Not valid ID"
        })
    }

    const todo = await Todos.findByIdAndDelete({
        _id:id
    })

    if(!todo){
        res.status(400).json({
            massage:'todo Not found'
        })
        return
    }

    res.status(200).json({
        massage:'todo deleted successfully',
        data:todo
    })

    } catch (error) {
        console.log(error.message);
        
    }
}

//update todo
const updateTodo = async (req,res)=>{
    try {
        const {id} = req.params;
    const {title,description} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            massage : "Not valid ID"
        })
    }

    const todo = await Todos.findByIdAndUpdate(
        {_id:id},
       { title,
        description
       },
    )

    if(!todo){
        res.status(400).json({
            massage : "Todo not found"
        })
        return
    }

    res.status(200).json({
        massage : "todo updated successfully",
        data:todo
    })
    } catch (error) {
        console.error(error.message);
        res.status(400).json({
            message: "Something went wrong",
        });
    }
}


export {addTodo,getAllTodo,singleTodo,deleteTodo,updateTodo}