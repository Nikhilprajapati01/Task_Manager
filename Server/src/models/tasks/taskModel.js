import mongoose  from "mongoose";

const TaskSchema = new mongoose.Schema({
        title:{
            type: String,
            required: true,
            default: "NO description"
        },
        description:{
            type: String,
            default: "NO description"
        },
        dueDate:{
            type: String,
            default: Date.now(),
        },
        status:{
            type: String,
            emum:["active", "inactive"],
            default: "active",
        },

        completed:{
            type: Boolean,
            default:false,
        },
        priority: {
            type: String,
            enum: ["low", "medium", "high"],
            default: "low",
          },
         
  
    } ,{timestamps: true});

    const Taskmodel = mongoose.model("Task", TaskSchema);

    export default Taskmodel