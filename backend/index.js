const express = require('express')
const mongoose = require('mongoose')

const cors = require("cors");
const app= express()
require('dotenv').config()


const MoviesRouter = require('./routes/MoviesRoutes')
const TheaterRouter = require('./routes/TheaterRoutes')
app.use(express.json({limit:'25mb'}));
app.use(express.urlencoded({limit:'25mp'}))
app.use(cors());


app.use('/movies',MoviesRouter);
app.use('/theater',TheaterRouter)

mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log('MongoDB Connected !')})
.catch((err)=>{console.log(err)})

app.listen(process.env.PORT, ()=>{
    console.log(`Listen at ${process.env.PORT}`)
})