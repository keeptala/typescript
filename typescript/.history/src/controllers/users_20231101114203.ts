import express from 'express';
import {getUsers } from '../db/users'

export const getAllUsers = (req: express.Request, res: express.Response) => {
    try {
        const user = getUsers();
         
        return 
    } catch (error) {
        console.log(error);
        res.sendStatus(403)
        
    }
}