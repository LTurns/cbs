import express from 'express'
// import asyncHandler from 'express-async-handler';
const router = express.Router()
// import Product from '../models/productModel.js';
import { getProductById, getProducts, createProduct, deleteProduct, updateProduct } from '../controllers/productControllers.js';
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)
router.route('/').get(getProducts).post(protect, admin, createProduct)
// router.route('/:id/reviews').post(protect, createProductReview)
// router.get('/top', getTopProducts)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

export default router