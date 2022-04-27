const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const { User } = require('../models');

// Register GET route
router.get('/', (req,res) => {
    res.render('users/login')
})


// router.post('/', async function (req,res) {
//     try {
//         const foundUser = await User.findOne({email: req.body.email});
//         console.log(foundUser:)
//         if(!foundUser) return res.redirect("/")
//         const passwordMatch = await bcrypt.compare(req.body.password, foundUser.password);
//         if (!match) return res.send(alert('Password Incorrect'))
//         req.session.currentUser = {
//             id: foundUser._id,
//             username: foundUser.username,
//         };
//         return res.redirect("/");
//     } catch (err) {
//         console.log(err);
//         res.send(err);
//     }
// });

router.get('/register', (req,res) => {
    return res.render('./users/register')
} )

router.post('/register', async (req,res, next) => {
    try{
        const foundUser = await User.exists({email: req.body.email});
        console.log(`foundUser: ${foundUser}`)
        if(foundUser){
            console.log('HERE')
            return res.redirect('/');
        }
        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(req.body.password, salt);
        req.body.password = hash;
        console.log(`hash: ${hash}`)
        const newUser = await User.create(req.body);
        console.log(`newUser: ${newUser}`)
        return res.redirect('/');
    } catch (err){
        console.log(err);
        return res.send(err);
    }
})

module.exports = router;