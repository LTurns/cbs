const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
 {
   user: {
     type: mongoose.Schema.Types.ObjectId,
     required: true,
     ref: 'User',
   },
   name: {
     type: String,
     required: true,
   },
   productId: {
    type: String
   },
   description: [
      {
        paragraph: {
          type: String,
          required: true,
        }
    }
  ],
  img: [
    {
     image: {
      type: String
     }
   }
  ],
   mainImg: {
     type: String,
     required: true
   },
   category: {
     type: String,
     required: true,
   },
   subCategory: {
     type: Array,
   },
   features: [
    {
     id: {
       type: Number
     },
     heading: {
      type: String,
     },
     list: [
      {
       listItem: {
        type: String
       }
      }
     ]
   }
  ],
  intro: {
    type: String,
    required: true
   },
  //  video: {
  //   type: String
  //  },
   videos: [
     { title : {
        type: String
      },
      video: {
        type: String
      }
    }
   ],
   configurationTitle: {
    type: String
   },
   configurationIntro: [
     {
       paragraph: {
          type: String
       }
     }
   ],
   configurationImage: {
    type: String
   },
    tables: [
     {
      columns: {
        type: Array,
       },
       image: {
        type: String
       },
       title: {
        type: String
       },
      items: [
       {
        "Item Description": {
         type: String
        },
        "partNo": {
          type: String
         },
       }
      ],
       }
      ],
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  accessories: [{
   name: {
    type: String,
   },
   category: {
    type: String,
   },
   subCategory: {
    type: String,
   },
   productId: {
    type: String,
   },
   intro: {
    type: String
   },
   mainImg: {
    type: String
   }
  }
  ],
},
 {
   timestamps: true,
 }
)
const Product = mongoose.model('Product', productSchema)

module.exports = Product;