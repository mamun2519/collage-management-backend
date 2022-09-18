const express = require('express');
const app = express()
const cors = require('cors')

// middelwar 

app.use(express.json())
// app.use(fileUpload());
app.use(express.static("public"));
app.use(cors())

// all router model 
const studentRouter = require('./Router/studentRouter')

// all Route api 
app.use('/v1/student' , studentRouter)

app.use('/' , (req , res)=>{
      res.send("hellw world")
})

module.exports = app