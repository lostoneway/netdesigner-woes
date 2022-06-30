console.log('Sweet, Node is running')
//setup dependancies 
const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

//variables
let db,    
    dbConnectionString = process.env.DB_STRING,
    dbName = 'star-wars-quotes',
    collection = 'netdesigner'

//connect to db
MongoClient.connect(dbConnectionString) 
    .then(client => {
        console.log('Connected to Database')
        db = client.db(dbName)
        // collection = db.collection('quotes')
    })

//Middlewares 
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

//Routes
app.get('/', async(request,response) => {
    try {
        response.render('index.ejs')
    } catch(error){
        response.status(500).send({message: error.message})
    }
})

app.post('/netdesigner', (req, res) => {
    console.log(req.body)
    // db.collection('woes').insertOne({name: req.body.name, msg: req.body.msg, thumbUp: 0, thumbDown:0}, (err, result) => {
    //   if (err) return console.log(err)
    //   console.log('saved to database')
    //   res.redirect('/')
    // })
  })

//setup listening port 
app.listen(process.env.PORT || 3000, () => {
    //check that your server is running during development
    console.log(`Server is running on port ${process.env.PORT}`)
})