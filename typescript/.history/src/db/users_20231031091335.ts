import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    username:{
        type: 'string',
        required: true,
    },
    email:{
        type: 'string',
        required: true,
    }
})