import express from 'express'
import { getUserByEmail } from '../db/users'
import { random } from 'helpers'


export const register = async (req: express.Request, res: express.Response) => {
    try {
        const { email , password, username} = req.body

        if(!email || !password || !username){
            return res.status(400)
        }
        const existingUser = await getUserByEmail(email)

        if(existingUser){
            return res.sendStatus(400)
        }

        const salt = 
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}