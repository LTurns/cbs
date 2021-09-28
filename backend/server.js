const path = require('path')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const { connectDB } = require('./config/db.js')
const productRoutes = require('./routes/productRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const uploadRoutes = require('./routes/uploadRoutes.js')
const { notFound, errorHandler } = require('./middleware/errorMiddleware.js')

dotenv.config()

connectDB()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
 res.send('API is running')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/upload', uploadRoutes)

// const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(notFound)

app.use(errorHandler)

// const PORT = process.env.PORT || 

app.listen(5001, console.log(`Server running in ${process.env.NODE_ENV} mode on port 5000`))
