const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel.js')

        // product.features.forEach((obj, index) => {
    //   obj.id = features[index].id;
    //   obj.heading = features[index].heading
    //     features[index].list.forEach((list, index) => {
    //       obj.list[index].listItem = list.listItem
    //     })
    //   return obj  // obj called here
    // })
    // code for reference

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  // const pageSize = 10
  // const page = Number(req.query.pageNumber) || 1

  // const keyword = req.query.keyword
  //   ? {
  //       name: {
  //         $regex: req.query.keyword,
  //         $options: 'i',
  //       },
  //     }
  //   : {}

  // const count = await Product.countDocuments({ ...keyword })
  // const products = await Product.find({ ...keyword })
  //   .limit(pageSize)
  //   .skip(pageSize * (page - 1))

const products = await Product.find({ })
    // .limit(pageSize)
    // .skip(pageSize * (page - 1))

    res.json(products)

  // res.json({ products, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

const getProductByName = asyncHandler(async (req, res) => {
  console.log(req.params.id)


  const product = await Product.find({ 'name': req.params.id})

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    user: req.user._id,
    name: 'Sample name',
    id: '1',
    productId: '123',
    description: [
      {
        paragraph: 'paragraph'
      },
    ],
    img: [
      { 
        image: 'tornado.jpg'
      }
    ],
    mainImg: 'tornado.jpg',
    category: 'category',
    subCategory: [],
    features: [
      { id: 1 },
      { heading: 'Title' },
      { list: 
          [
          { listItem: 'item' }
        ]
      }
    ],
    intro: 'intro',
    videos: [
      {
        title: 'video-title'
      },
      { video: '' }
    ],
    configurationTitle: 'configTitle',
    configurationIntro: [
      {
        paragraph: 'configurationIntro'
      }
    ],
    configurationImage: 'string',
    tables: [
      {
        columns: [
          'columntitleOne', 'columntitleTwo'
        ],
        image: 'table Image',
        title: 'table heading',
        items: [
          {
            "item Description" : 'description',
            "partNo" : 'part number'
          }
        ]
      }
    ],
    countInStock: 100,
    enquiries: 0,
    accessories: [
      {
      name: 'Product Accessory',
      id: '1',
      category: 'Product Category',
      subCategory: 'P SubCat',
      productId: 'id',
      intro: 'product intro',
      mainImg: 'mainImg'
      }
    ],
    recommendedProducts: [
      {
      name: 'Product Accessory',
      id: '1',
      category: 'Product Category',
      subCategory: 'P SubCat',
      productId: 'id',
      intro: 'product intro',
      mainImg: 'mainImg'
      }
    ]
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    productId,
    img,
    mainImg,
    category,
    subCategory,
    description,
    features,
    intro,
    videos,
    configurationTitle,
    configurationIntro,
    configurationImage,
    tables,
    accessories,
    countInStock,
    recommendedProducts
  } = req.body

  console.log('heyyyy', req.body)
  console.log('heyyyyy', req.body.images)

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.productId = productId
    product.tables = tables
    product.mainImg = mainImg
    product.category = category
    product.subCategory = subCategory
    product.intro = intro
    product.configurationTitle = configurationTitle
    product.configurationImage = configurationImage
    product.configurationIntro = configurationIntro
    product.description = description
    product.features = features
    product.img = img
    product.videos = videos
    product.accessoris = accessories
    product.recommendedProducts = recommendedProducts,
    product.countInStock = countInStock

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    console.log(Error)
  }
})

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Product already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    product.reviews.push(review)

    product.numReviews = product.reviews.length

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length

    await product.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3)

  res.json(products)
})

module.exports = {
  getTopProducts,
  getProductById,
  getProducts,
  createProduct,
  deleteProduct, 
  updateProduct,
  getProductByName
}

// export {
//   getProducts,
//   getProductById,
//   deleteProduct,
//   createProduct,
//   updateProduct,
//   createProductReview,
//   getTopProducts,
// }