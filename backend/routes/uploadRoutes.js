const express = require('express')
const multer = require('multer')
const path = require('path')

const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)


const { uploadFile } = require('../s3.js')
const router = express.Router();

const storage = multer.diskStorage({
   destination(req, file, cb) {
    cb(null, 'uploads/')
   },
   filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)  // includes dot
   }
});

function checkFileType(file, cb){
 const filetypes = /jpg|jpeg|png/
 const extname = filetypes.test(path.extname(file.originalname).toLowerCase()) 
 const mimetype = filetypes.test(file.mimetype)

 if (extname && mimetype) {
   return cb(null, true)
 } else {
  cb('Images only!')
 }
}

const upload = multer({
  storage,
  fileFilter: function(req, file, cb){
   checkFileType(file, cb)
  }
})

router.post('/', upload.single('image'), async (req, res) => {
  const file = req.file
  console.log(file)

  // apply filter
  // resize 

  const result = await uploadFile(file)
  await unlinkFile(file.path)
  console.log('helloooo', result)
  const description = req.body.description

  res.send(result.Location)
})

// router.get('/', (req, res) => {
//   res.send('/uploads')
//  })

module.exports = router;