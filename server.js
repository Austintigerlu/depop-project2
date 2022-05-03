// require
const express = require('express');
const methodOverride = require('method-override');
const session = require("express-session");
const MongoStore = require("connect-mongo");
const controllers = require('./controllers');

// Database
const db = require('./models');

// Port
const PORT = process.env.PORT

// instance
const app = express();

// db connection
require('./config/db.connection')

// app configs
app.set('view engine', 'ejs')

// static links to public folder
app.use(express.static('public'))

// adding delete and update requests
app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: false }));

// session creation
app.use(
    session({
        store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI}),
        secret: "super secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
        },
    })
);

app.use(function (req, res, next) {
    res.locals.user=req.session.currentUser;
    next();
})

// CONTROLLERS
app.use('/products', controllers.products);
app.use('/login', controllers.users);
app.use('/cart', controllers.cart);

// Home Page
app.get('/', async (req,res, next) => { 
    try { 
        const products = await db.Product.find({})
        const context = {products}
        res.render('index.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})
 
// Create Server
app.listen(PORT || 4000)