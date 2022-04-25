// require
const express = require('express');
const methodOverride = require('method-override');
const controllers = require('./controllers')
const PORT = process.env.PORT
// instance
const app = express();

// db connection
require('./config')

// app configs
app.set('view engine', 'ejs')

// static for css
app.use(express.static('public'))

// adding delete and update requests
app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: false }))

// CONTROLLERS

// Create Server
app.listen(PORT)