import express from 'express';
import {getUsers } from '../db/users'

export const getAllUsers = (req: express.Request, res: express.Response) => {
    try {
        const users = getUsers();
         
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.sendStatus(40)
        
    }
}