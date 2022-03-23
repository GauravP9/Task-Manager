const mongoose = require('mongoose')

const connectString = ''

const connectDB = (url) =>{
    return mongoose             // This function will return a connection to DB 
    .connect(url,{    // If we are connected to DB then only it will start server
        useNewUrlParser:true,   // Extra arguemnts to clear depreciation in terminal
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
}

module.exports = connectDB

