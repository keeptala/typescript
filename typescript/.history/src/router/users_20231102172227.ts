import express from 'express'

import { deleteUser, getAllUsers } from '../controllers/users'
import { isAuthenticated } from 'middlewares'


export default (router: express.Router) => {
    router.get('/users' ,getAllUsers)
    router.delete('/users/:id',isAuthenticated,deleteUser)
    
}