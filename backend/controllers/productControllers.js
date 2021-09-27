import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

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
  console.log('hellooo', req)

  const product = new Product({
    user: req.user._id,
    name: 'Sample name',
    productId: '',
    description: [
      {
        paragraph: 'paragraph'
      },
    ],
    img: [
      { 
        image: 'image'
      }
    ],
    mainImg: 'image',
    category: 'string',
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
      { video: 'video' }
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
    accessories: [
      {
      name: 'Product Accessory',
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
    images,
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
  } = req.body

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
    product.countInStock = countInStock
    product.description = description
    product.features = features
    product.img = images
    product.videos = videos
    product.accessoris = accessories
    product.countInStock = countInStock

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
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

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
}