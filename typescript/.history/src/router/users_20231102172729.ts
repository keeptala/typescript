import express from 'express'

import { deleteUser, getAllUsers } from '../controllers/users'
import { isAuthenticated, isOwner } from '../'


export default (router: express.Router) => {
    router.get('/users',isAuthenticated ,getAllUsers)
    router.delete('/users/:id',isOwner,deleteUser)

    
}