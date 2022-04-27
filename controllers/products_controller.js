const express = require('express')
const router = express.Router()
const db = require('../models')


// Index/Home Page
router.get('/', async (req,res,next) => {
	try {
		const Product = await db.Product.find({})
		const context = { Product }
		return res.render('products/index.ejs', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})

//  -- DISPLAY PAGES -- 

// Category: Mensware Page
router.get('/mensware/', async (req,res,next) => {
	try {
		const Product = await db.Product.find({})
		const context = { Product }
		return res.render('insert_name_here', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})

// Category: Mensware Sub: Tops Page
router.get('/mensware/tops/', async (req,res,next) => {
	try {
		const Product = await db.Product.find({})
		const context = { Product }
		return res.render('insert_name_here', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})


// Category: Mensware Sub: Tops/ID Page
router.get('/mensware/tops/:id/', async (req,res,next) => {
	try {
		const Product = await db.Product.findById(req.params.id)
		const context = { insert_name_here: insert_name_here }
		return res.render('insert_name_here', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})

// Category: Mensware Sub: Tops/ID/EDIT Page
router.get('/mensware/tops/:id/edit/', async (req,res,next) => {
	try {
		const insert_name_here = await db.insert_name_here.findById(req.params.id)
		const context = { insert_name_here: insert_name_here }
		return res.render('insert_name_here', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})

// Category: Mensware Sub: Bottoms Page
router.get('/mensware/bottoms/', async (req,res,next) => {
	try {
		const Product = await db.Product.find({})
		const context = { Product }
		return res.render('./products/mensware/bottoms/menbottoms.ejs', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})

// Category: Mensware Sub: Bottoms/ID Page
router.get('/mensware/bottoms/:id/', async (req,res,next) => {
	try {
		const insert_name_here = await db.insert_name_here.findById(req.params.id)
		const context = { insert_name_here: insert_name_here }
		return res.render('insert_name_here', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})

// Category: Mensware Sub: Bottoms/ID/EDIT Page
router.get('/mensware/bottoms/:id/edit/', async (req,res,next) => {
	try {
		const insert_name_here = await db.insert_name_here.findById(req.params.id)
		const context = { insert_name_here: insert_name_here }
		return res.render('insert_name_here', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})


// Category: Womensware Page
router.get('/womensware', async (req,res,next) => {
	try {
		const insert_name_here = await db.insert_name_here.find({})
		const context = { insert_name_here }
		return res.render('insert_name_here', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})

// Category: Womensware Sub: Tops Page
router.get('/womensware/tops', async (req,res,next) => {
	try {
		const insert_name_here = await db.insert_name_here.find({})
		const context = { insert_name_here }
		return res.render('insert_name_here', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})

// Category: Womensware Sub: Tops/ID Page
router.get('/womensware/tops/:id/', async (req,res,next) => {
	try {
		const insert_name_here = await db.insert_name_here.findById(req.params.id)
		const context = { insert_name_here: insert_name_here }
		return res.render('insert_name_here', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})

// Category: Womensware Sub: Tops/ID/EDIT Page
router.get('/womensware/tops/:id/edit', async (req,res,next) => {
	try {
		const insert_name_here = await db.insert_name_here.findById(req.params.id)
		const context = { insert_name_here: insert_name_here }
		return res.render('insert_name_here', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})

// Category: Womensware Sub: Bottoms Page
router.get('/womensware/bottoms', async (req,res,next) => {
	try {
		const insert_name_here = await db.insert_name_here.find({})
		const context = { insert_name_here }
		return res.render('insert_name_here', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})

// Category: Womensware Sub: Bottoms/ID Page
router.get('/womensware/bottoms/:id/', async (req,res,next) => {
	try {
		const insert_name_here = await db.insert_name_here.findById(req.params.id)
		const context = { insert_name_here: insert_name_here }
		return res.render('insert_name_here', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})

// Category: Womensware Sub: Bottoms/ID/EDIT Page
router.get('/womensware/bottoms/:id/edit/', async (req,res,next) => {
	try {
		const insert_name_here = await db.insert_name_here.findById(req.params.id)
		const context = { insert_name_here: insert_name_here }
		return res.render('insert_name_here', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})



// router.get('/jewelry', async (req,res,next) => {
// 	try {
// 		const insert_name_here = await db.insert_name_here.find({})
// 		// const context = { insert_name_here }
// 		// return res.render('insert_name_here', context)
// 	} catch (error) {
// 		console.log(error)
// 		req.error = error;
// 		return next();
// 	}
// })

// -- POST NEW ITEM -- 
router.post('/', async (req, res, next) => {
	try{
		const insert_name_here = await db.insert_name_here.create(req.body)
		res.redirect('/')
	} catch (error) {
		console.log(error)
		req.error = error
		return next();
	}
})

//  -- NEW WEBPAGES --  

//New Clothing/Jewelry Page
router.get('/new', (req,res) => {
	res.render('insert_name_here')
})

// -- DELETE ITEMS --
router.delete('')

module.exports = router