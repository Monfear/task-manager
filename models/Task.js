import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        maxlength: [30, 'name max length 30'],
        trim: true
    },

    isCompleted: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: {
            createdAt: true,
            updatedAt: true
        }
    }
);

const Task = model('Task', taskSchema);

export default Task;