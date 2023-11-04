import express from 'express'
import authentication  from

const router = express.Router();

export default() :  express.Router => {
    authentication(router)
    return router;
}