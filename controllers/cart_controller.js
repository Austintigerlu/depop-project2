const express = require('express')
const router = express.Router()
const db = require('../models')


// index route
router.get('/', (req,res) => {
    res.render('cart/index')
});


// router.get('/', async (req,res,next) => {
// 	try {
// 		const Cart = await db.Cart.find({
//             cart: 'Product',
//         })
// 		const context = { Cart }
// 		return res.render('./cart/index.ejs', context)
// 	} catch (error) {
// 		console.log(error)
// 		req.error = error;
// 		return next();
// 	}
// })


// router.get("/", (req, res) => {
//     Cart.find({})
//       .populate("product")
//       .exec((error, allCart) => {
//         if (error) {
//           console.log(error);
//           req.error = error;
//           return next();
//         }
//         const context = { cart: allCart };
//         return res.render("./cart/index.ejs", context);
//      });
//   });

// -- DELETE ITEMS -- add later
router.delete('')

module.exports = router