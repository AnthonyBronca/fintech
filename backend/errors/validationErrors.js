

class CustomValidationError extends Error{
    constructor(message, statusCode=500){
        super(message)
        this.message = message || "There was an error handling this request.";
        this.statusCode = statusCode
    }
}


module.exports = {CustomValidationError};
