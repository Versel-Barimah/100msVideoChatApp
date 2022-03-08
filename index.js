// require('dotenv').config();
import dotenv from 'dotenv';

import express from 'express';
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// import router
// const VideoRouter = require('./videoConference/router');
import VideoRouter from './videoConference/router.js'
app.use('/', VideoRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})