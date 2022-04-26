// require
const express = require('express');
const methodOverride = require('method-override');
const session = require("express-session");
const MongoStore = require("connect-mongo");
const controllers = require('./controllers')
const PORT = process.env.PORT
// instance
const app = express();

// db connection
require('./config/db.connection')

// app configs
app.set('view engine', 'ejs')

// static for css
app.use(express.static('public'))

// adding delete and update requests
app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: false }))

// CONTROLLERS
app.use('/products', controllers.products);
// Create Server
app.listen(PORT)