const express = require('express')
const router = express.Router()
const db = require('../models')


// Products Page
router.get('/', async (req,res,next) => {
	try {
		const Product = await db.Product.find({})
		const context = { Product }
		console.log(context)
		return res.render('products/index.ejs', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})

//  -- NEW WEBPAGES --  

//New Clothing/Jewelry Page
router.get('/new', (req,res) => {
	res.render('./new.ejs')
})

router.post('/', async (req, res, next) => {
    try {
		let create = req.body
        const createdProduct = await db.Product.create(create);
		// const userProduct = await db.User.create(create)
        res.redirect('/');
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

//  -- DISPLAY PAGES -- 

// Category: Mensware Page
router.get('/mensware/', async (req,res,next) => {
	try {
		const Product = await db.Product.find({department: 'Mens'})
		const context = { Product }
		return res.render('./products/mensware/mensware.ejs', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})

// Category: Mensware Sub: Tops Page
router.get('/mensware/tops/', async (req,res,next) => {
	try {
		const Product = await db.Product.find({
			department: 'Mens',
			category: 'Tops'
		})
		const context = { Product }
		return res.render('./products/mensware/tops/menstops.ejs', context)
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
		const context = { 
			Product: Product,
			idx: req.params.id
		}
		return res.render('./products/mensware/tops/menstopsshow.ejs', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})

// Category: Mensware Sub: Bottoms Page
router.get('/mensware/bottoms/', async (req,res,next) => {
	try {
		const Product = await db.Product.find({
			department: 'Mens',
			category: 'Bottoms'
		})
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
		const Product = await db.Product.findById(req.params.id)
		const context = { 
			Product: Product,
			idx: req.params.id
		}
		return res.render('./products/mensware/bottoms/menbottomsshow.ejs', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})

// Category: Mensware Sub: Bottoms/ID/EDIT Page
router.get('/:id/edit/', async (req,res,next) => {
	try {
		const Product = await db.Product.findById(req.params.id)
		const context = { Product: Product }
		return res.render('edit', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})

router.put('/:id', async (req, res, next)=>{
    try {
        const Product = await db.Product.findByIdAndUpdate(req.params.id, req.body);
        return res.redirect(`/products`)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})



// Category: Womensware Page
router.get('/womensware', async (req,res,next) => {
	try {
		const Product = await db.Product.find({department: 'Womens'})
		const context = { Product }
		return res.render('./products/womensware/womensware.ejs', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})

// Category: Womensware Sub: Tops Page
router.get('/womensware/tops', async (req,res,next) => {
	try {
		const Product = await db.Product.find({
				department: 'Womens',
				category: 'Tops'
		})
		const context = { Product }
		return res.render('./products/womensware/tops/womenstops.ejs', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})

// Category: Womensware Sub: Tops/ID Page
router.get('/womensware/tops/:id/', async (req,res,next) => {
	try {
		const Product = await db.Product.findById(req.params.id)
		const context = { 
				Product: Product,
				idx: req.params.id
			}
		return res.render('./products/womensware/tops/womenstopsshow.ejs', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})

// Category: Womensware Sub: Bottoms Page
router.get('/womensware/bottoms', async (req,res,next) => {
	try {
		const Product = await db.Product.find({
			category: 'Bottoms',
			department: 'Womens',
		})
		const context = { Product }
		console.log(context)
		return res.render('./products/womensware/bottoms/womenbottoms.ejs', context)
	} catch (error) {
		console.log(error)
		req.error = error;
		return next();
	}
})

// Category: Womensware Sub: Bottoms/ID Page
router.get('/womensware/bottoms/:id/', async (req,res,next) => {
	try {
		const Product = await db.Product.findById(req.params.id)
		const context = { 
				Product: Product,
				idx: req.params.id
			}
		return res.render('./products/womensware/bottoms/womenbottomsshow.ejs', context)
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


// -- DELETE ITEMS --
router.delete('')

module.exports = router