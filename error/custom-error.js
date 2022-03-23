
// Custom Class For Errors

class customAPIError extends Error {
    constructor(message,statuscode){
        super(message)    // Involkes constuctor of parent class -- Grants all the properties of parent
        this.statuscode = statuscode
    }
}

const createCustomeError = (msg,statuscode) =>{
    return customAPIError(msg,statuscode)
}

module.exports ={createCustomeError,customAPIError}
