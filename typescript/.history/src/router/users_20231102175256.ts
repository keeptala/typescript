import express from 'express'

import { deleteUser, getAllUsers } from '../controllers/users'
import { isAuthenticated, isOwner } from '../middlewares'
import { update } from 'lodash'


export default (router: express.Router) => {
    router.get('/users',isAuthenticated ,getAllUsers)
    router.delete('/users/:id',isOwner,deleteUser)
    router.patch('/users/:id',isAuthenticated,isOwner, updateUser)
    
}