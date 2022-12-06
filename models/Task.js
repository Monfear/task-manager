import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        maxlength: [25, 'name max length 25'],
        trim: true
    },

    isCompleted: {
        type: Boolean,
        default: false
    }
});

const Task = model('Task', taskSchema);

export default Task;