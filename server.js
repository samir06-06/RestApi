const express = require('express')
require('dotenv').config()
const port = process.env.PORT || 5001
const connectDB = require('./config/db')

connectDB()
const app = express();

// Middlewhere application part:
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
  res.json({ message: 'hello world' });
});

const ideasRouter = require('./routes/ideas') 
app.use('/api/ideas', ideasRouter)


app.listen(port, () => console.log(`Server listening on port ${port}`));
