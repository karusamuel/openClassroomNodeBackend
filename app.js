const express = require('express');
const bodyParser = require('body-parser');
const recipe = require('./routes/recipe');
const  app = express();
// CtjRQ0M0AAM1wTJc
//mongodb+srv://sam:<password>@devc-js9ji.mongodb.net/test?retryWrites=true&w=majority

const mongoose = require('mongoose');

app.use((req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next()

});

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://sam:CtjRQ0M0AAM1wTJc@devc-js9ji.mongodb.net/test?retryWrites=true&w=majority")
    .then(()=>{
      console.log("success connected")
    })
    .catch((error)=>{
      console.log(error.toString())
    })


app.use('/api/recipes/',recipe);
module.exports = app;