const express = require('express')
// const asyncHandler = require('express-async-handler';
const router = express.Router()
// const Product = require('../models/productModel.js';
const { authUser, getUserProfile, registerUser } = require('../controllers/userController.js')
const { protect } = require('../middleware/authMiddleware.js')

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)

module.exports = router;