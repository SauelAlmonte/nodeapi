const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


// DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB Connected'))


mongoose.connection.on('error', err => {
    console.log(`DB Connection Error: ${err.message}`)
})


// Importing Routes
const postRoutes = require('./routes/post')

// Middleware Morgan
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use('/', postRoutes)


const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`A Node JS API is Listening on port:${port}`)
})