const {customAPIError} = require('../error/custom-error')

const errorHandlerMiddleware = (error,req,res,next) => {
    console.log(error)
    if (error instanceof customAPIError){
        return res.status(error.statuscode).json({msg:error.message})
    }
    return res.status(500).json("message : Something went wrong ")    // Can make custom message as per user     
}



module.exports = errorHandlerMiddleware