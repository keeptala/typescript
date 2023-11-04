import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();


app.use(cors(
    {
        credentials: true,
    }
))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app);

server.listen(8000, ()  => {
    console.log('server running on http://localhost:8000/');
    
})

const MONGO_URT = 'mongodb+srv://kiptala:toor@cluster0.zhe84vz.mongodb.net/?retryWrites=true&w=majority'

mongoose.Promise = Promise;

