import express from 'express'
import { getUserByEmail } from '../db/users'


export const register = async (req: express.Request, res: express.Response) => {
    try {
        const { email , password, username} = req.body

        if(!email || !password || !username){
            return res.statu
            s(400)
        }
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}