/* To Do: 
- Make Edit and Delete buttons functional with event listeners and server.js */

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
//GET or READ METHOD
app.get('/', (request,response) => {
    db.collection('netdesigner').find().toArray()
    .then(data => {
        response.render('index.ejs', {info: data})
    }) 
    .catch(error => response.status(500).send({message: error.message}))
})

//POST or CREATE METHOD
app.post('/addWoe', (request, response) => {
    // console.log(req.body)
    db.collection('netdesigner').insertOne({ 
        name: request.body.name, 
        issue: request.body.issue, 
        wishes: request.body.wishes, 
        actionTaken: request.body.actionTaken, 
        solution: request.body.solution
    }) 
    .then(result => {
        console.log('NetDesigner Woe Added')
        response.redirect('/')
    })
    .catch(error => response.status(500).send({message: error.message}))
  })

//EDIT or UPDATE METHOD
app
  .route('/edit/:id')
  .get((request,response)=> {
    const id = request.params.id; 
    db.collection('netdesigner').find().toArray()
    .then(data => {
        response.render('edit.ejs', {info: data, idInfo: id})
    }) 
    .catch(error => response.status(500).send({message: error.message}))
  })
  .post((request,response) => {
    const id = request.params.id;
    db.connection('netdesigner').findByIdAndUpdate(
        id, 
        {
            name: request.body.name, 
            issue: request.body.issue, 
            wishes: request.body.wishes, 
            actionTaken: request.body.actionTaken, 
            solution: request.body.solution 
        })
        .then(result => {
            console.log('NetDesigner Woe Updated')
            response.redirect('/')
        })
        .catch(error => response.status(500).send({message: error.message}))
  })

//DELETE
app
  .route('/remove/:id')
  .get((request,response)=>{
    const id = request.params.id;
    db.connection('netdesigner').findByIdAndRemove(id)
    .then(result => {
        console.log('NetDesigner Woe Deleted')
        response.redirect('/')
    }) 
    .catch(error => response.status(500).send({message: error.message}))
  })
//setup listening port 
app.listen(process.env.PORT || 3000, () => {
    //check that your server is running during development
    console.log(`Server is running on port ${process.env.PORT}`)
})
