import express from 'express';
import {getUsers } from '../db/users'

export const getAllUsers = (req: express.Request, res: express.Response) => {
    try {
        
    } catch (error) {
        console.log(EvalError);
        res.sendStatus(403)
        
    }
}