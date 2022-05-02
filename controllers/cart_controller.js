const express = require('express')
const router = express.Router()
const db = require('../models')


// index route
router.get('/', (req,res) => {
    res.render('cart/index')
});


// -- DELETE ITEMS -- add later
router.delete('')

module.exports = router