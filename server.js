const express = require ('express')
const app = express()
const mongoose = require ('mongoose')
require ('dotenv').config({path:'./config/.env'})
const user = require ("./models/User")


app.use(express.json())

// GET :  RETURN ALL USERS //
app.get('/allOfUsers',(req,res)=>{
    user.find()
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})

// POST :  ADD A NEW USER TO THE DATABASE //
app.post('/addNewUser',(req,res)=>{
    const newUser = new user(req.body)
    newUser.save()
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})

// PUT : EDIT A USER BY ID  //
app.put('/user/update/:id',(req,res)=>{
    user.findByIdAndUpdate({_id: req.params.id},req.body)
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})

// DELETE : REMOVE A USER BY ID
app.delete('/user/delete/:id',(req,res)=>{
    user.findByIdAndRemove({_id: req.params.id})
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})

mongoose.set('strictQuery', false)
mongoose.connect(process.env.REST_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
},(err)=> {
    err ? console.log(err) :
    console.log("yeeess our database is connect")
})

app.listen(process.env.PORT,(err) =>{
    err ? console.log(err) : console.log(`server is running on http://localhost:${process.env.PORT} `)
})