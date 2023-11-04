import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true},
        email: { type: String, required: true},
        authentication:{
            password: { type: String, required: true, select: false},
            salt: { type: String, required: true},
            sessionToken: { type:String, required:
        }
    }
)