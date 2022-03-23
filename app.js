const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

const connectDB = require('./db/connect')
require('dotenv').config()  // env file, no need to assign to variable

// Extra Features
const notFound = require('./middleware/not-found') // Not found Page
const errHandler = require('./middleware/error-handler')

// Middleware
app.use(express.static('./public'))
app.use(express.json())


// Routes
app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errHandler)

const port = process.env.PORT || 3000

const start = async() =>{   // Async await 
    try {
        await connectDB(process.env.MONGO_URI)   // connection successful then server on
        app.listen(port , console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error)
    }
}

start()