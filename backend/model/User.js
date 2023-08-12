import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    lastname: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    role:{
        type: String,
        default: "admin",
        enum: ["user", "admin"],

    }
}, { timestamps: true });

export default mongoose.model("User", userSchema);          