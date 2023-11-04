import express from 'express'
import authentication  fgetAllUsers

const router = express.Router();

export default() :  express.Router => {
    authentication(router)
    return router;
}