const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const { User } = require('../models');

// Login Route
router.get('/', (req,res) => {
        res.render('users/login')
});

router.post('/', async (req,res, next) => {
    try{
        const foundUser = await User.findOne({email: req.body.email});
        console.log(foundUser)
        const passMatch = await bcrypt.compare(req.body.password, foundUser.password);
        if (!passMatch) return alert('Password or Username Invalid');
        req.session.currentUser = {
            id: foundUser._id,
            username: foundUser.username,
        };
        console.log(req.session)
        return res.redirect('/')
    } catch(error){
        console.log(error)
        req.error = error;
        return next();
    }
})

// Register Route
router.get('/register', (req,res) => {
        res.render('users/register')
}); 

router.post('/register', async (req,res, next) => {
    try {
        const foundUser = await User.exists({email: req.body.email})
        if (foundUser) {
            res.redirect('/login')
        }
        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(req.body.password, salt);
        req.body.password = hash;
        const newUser = await User.create(req.body);
        return res.redirect('/login')
    } catch(error){
        console.log(error)
        req.error = error;
        return next();
    }
})

router.get('/logout', async (req,res)=> {
    try{
        await req.session.destroy();
        return res.redirect('/');
    } catch (error){
        console.log(error);
        return res._construct.send(error);
    }
})


module.exports = router;