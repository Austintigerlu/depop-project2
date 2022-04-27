const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const { User } = require('../models');

// Register GET route
router.get('/register', (req,res) => {
    return res.render('./users/register')
} )

router.get('/', (req,res) => {
    res.render('users/login')
})
module.exports = router;