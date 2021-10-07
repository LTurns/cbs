const express = require('express')
// const asyncHandler = require('express-async-handler';
const router = express.Router()
// const Product = require('../models/productModel.js';
const { getProductById, getProducts, createProduct, deleteProduct, updateProduct, getProductByName } = require('../controllers/productControllers.js')
const { protect, admin } = require('../middleware/authMiddleware.js')

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)
router.route('/name/:id').get(getProductByName)
router.route('/').get(getProducts).post(protect, admin, createProduct)
// router.route('/:id/reviews').post(protect, createProductReview)
// router.get('/top', getTopProducts)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

module.exports = router;