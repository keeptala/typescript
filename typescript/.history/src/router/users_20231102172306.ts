import express from 'express'

import { deleteUser, getAllUsers } from '../controllers/users'
import { isAuthenticated, isOwner } from 'middlewares'


export default (router: express.Router) => {
    router.get('/users',is ,getAllUsers)
    router.delete('/users/:id',isOwner,deleteUser)

    
}