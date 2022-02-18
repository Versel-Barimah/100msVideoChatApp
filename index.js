require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import router
const VideoRouter = require('./videoConference/router');


app.use('/', VideoRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})