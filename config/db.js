// const mongoose = require('mongoose');

// mongoose.set('strictQuery', true);

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error connecting to MongoDB: ${error.message}`);
//   }
// };

// module.exports = connectDB;



const mongoose = require('mongoose')

mongoose.set('strictQuery', true)


const connectDB = async() => {
    const conn = await mongoose.connect(process.env.MONGO_DB)
    console.log(`MongoDB connected ${conn.connection.host}`)
}


module.exports = connectDB
