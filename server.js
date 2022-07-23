console.log('Sweet, Node is running')
//setup dependancies 
const express = require('express')
const app = express()
const cors = require('cors')
// const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose')
require('dotenv').config()
//add model variable 

//variables
let db,     
    dbConnectionString = process.env.DB_STRING,
    dbName = 'NetdesignerWoesDemo',
    collection = 'tasks'

//connect to db
mongoose.connect(dbConnectionString,{useNewUrlParser: true},
    () => {console.log('Connected to Database')})

//Middlewares 
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

//Routes
//GET or READ METHOD


//POST or CREATE METHOD


//EDIT or UPDATE METHOD

//setup listening port 
app.listen(process.env.PORT || 3000, () => {
    //check that your server is running during development
    console.log(`Server is running on port ${process.env.PORT}`)
})
