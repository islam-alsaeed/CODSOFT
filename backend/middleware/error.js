const errorResponse = require("../utils/errorResponse");
const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;
    if (err.name === "CastError") {
        const message = `Resource not found ${err.value}`;
        error = new errorResponse(message, 404);
    }
    // for duplicate values
    if (err.code === 11000) {
        const message = "Duplicate value entered";
        error = new errorResponse(message, 400);
    }
    // for Mongoose validation
    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map(valu => ' ' + valu.message);
        error = new errorResponse(message, 400);
    }
    res.status(error.codeStatus||500).json({
        success: false,
        error: error.message || "server error"
    })
}
module.exports = errorHandler;