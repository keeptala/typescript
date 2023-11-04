import express from 'express';
import { get , merge } from 'lodash'

import {getUserBySessionToken} from '../db/users';


export const isAuthenticated = async (req: express.Request, res: express.Response) => {
    try {
        const sessionToken = req.cookies['KIPTALA-AUTH']

        if(!se)
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
        
    }
}