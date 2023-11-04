import express from 'express'
import { authentication } from 'helpers';

const router = express.Router();

export default() :  express.Router => {
    return router;
}