import asyncHandler from "express-async-handler";
// import { userLoginStatus } from "../auth/userController";
import Taskmodel from "../../models/tasks/taskModel.js"

export const createTask = asyncHandler(async (req, res) =>{
    try {
        const {title, description, dueDate, priority, status} = req.body;
        if(!title || title.trim() === ""){
            res.status(400).json({massage:"Title is requires!"})
        }
        if(!description || description.trim() === ""){
            res.status(400).json({massage:"description is requires!"})
        }
      const task = new Taskmodel({
        title,
        description,
        dueDate,
        priority,
        status,
        // user:  req.user._id,
      })
   
       await task.save();

       res.status(201).json(task)
    } catch (error) {
        console.log("something wrong in task creates", error);
        res.status(500).json({ message: error.message });
        
    }
});
export const getTasks = asyncHandler(async (req, res) => {
    try {
      // const userId = req.user._id;
  
      // if (!userId) {
      //   res.status(400).json({ message: "User not found!" });
      // }
  
      const tasks = await Taskmodel.find();
  
      res.status(200).json({
        length: tasks.length,
        tasks,
      });
    } catch (error) {
      console.log("Error in getTasks: ", error.message);
      res.status(500).json({ message: error.message });
    }
  });

  export const getTask = asyncHandler(async (req, res) => {
    try {
      const userId = req.user._id;
  
      const { id } = req.params;
  
      if (!id) {
        res.status(400).json({ message: "Please provide a task id" });
      }
  
      const task = await Taskmodel.findById(userId);
  
      if (!task) {
        res.status(404).json({ message: "Task not found!" });
      }
  
      if (!task.user.equals(userId)) {
        res.status(401).json({ message: "Not authorized!" });
      }
  
      res.status(200).json(task);
    } catch (error) {
      console.log("Error in getTask: ", error.message);
      res.status(500).json({ message: error.message });
    }
  });

  export const updateTask = asyncHandler(async (req, res) => {
    try {
      const userId = req.user._id;
  
      const { id } = req.params;
      const { title, description, dueDate, priority, status, completed } =
        req.body;
  
      if (!id) {
        res.status(400).json({ message: "Please provide a task id" });
      }
  
      const task = await Taskmodel.findById(id);
  
      if (!task) {
        res.status(404).json({ message: "Task not found!" });
      }
  
      // check if the user is the owner of the task
      if (!task.user.equals(userId)) {
        res.status(401).json({ message: "Not authorized!" });
      }
  
      // update the task with the new data if provided or keep the old data
      task.title = title || task.title;
      task.description = description || task.description;
      task.dueDate = dueDate || task.dueDate;
      task.priority = priority || task.priority;
      task.status = status || task.status;
      task.completed = completed || task.completed;
  
      await task.save();
  
      return res.status(200).json(task);
    } catch (error) {
      console.log("Error in updateTask: ", error.message);
      res.status(500).json({ message: error.message });
    }
  });
  

  export const deleteTask = asyncHandler(async (req, res) => {
    try {
      const userId = req.user._id;
      const { id } = req.params;
  
      const task = await Taskmodel.findById(id);
  
      if (!task) {
        res.status(404).json({ message: "Task not found!" });
      }
  
      // check if the user is the owner of the task
      if (!task.user.equals(userId)) {
        res.status(401).json({ message: "Not authorized!" });
      }
  
      await Taskmodel.findByIdAndDelete(id);
  
      return res.status(200).json({ message: "Task deleted successfully!" });
    } catch (error) {
      console.log("Error in deleteTask: ", error.message);
      res.status(500).json({ message: error.message });
    }
  });