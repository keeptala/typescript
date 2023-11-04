import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true},
        email: { type: String, required: true},
        authentication:{
            password: { type: String, required: true, select: false},
            salt: { type: String, select: false},
            sessionToken: { type:String, select:false}
        }
    }
)

export const UserModel = mongoose.model('User', UserSchema)

export const getUsers = () => UserModel.find()
export const getUserByEmail = (email: String) => UserModel.findOne({ email })
export const getUserBySessions = () => UserModel.findOne({ :sessionsToken })