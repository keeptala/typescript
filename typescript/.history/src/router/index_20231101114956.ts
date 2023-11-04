import express from 'express'
import authentication  

const router = express.Router();

export default() :  express.Router => {
    authentication(router)
    return router;
}