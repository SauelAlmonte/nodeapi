const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const dotenv = require('dotenv')
dotenv.config()


// DB
mongoose.connect(process.env.MONGO_URI,)
    .then(() => console.log("DB Connected"))

mongoose.connection.on("error", err => {
    console.log(`DB Connection Error: ${err.message}`)
})


// Importing Routes
const postRoutes = require('./routes/post')
const {mongo} = require("mongoose");

// Middleware
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(expressValidator())
app.use("/", postRoutes)


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`A Node JS API is Listening on port:${port}`)
})