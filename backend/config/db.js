import mongoose from 'mongoose';

const connectDB = async () => {
  try {
   const conn = await mongoose.connect(process.env.MONGO_URI, {
    // useUnifiedTopology: true,
    // useNewUrlParser: true,
    // useCreateIndex: true,
   })

   console.log(`Mongo Connected to host ${conn.connection.host}`)
  }
  catch (error) {
   console.log(`error: ${error}`)
   process.exit(1);
  }
}

export default connectDB