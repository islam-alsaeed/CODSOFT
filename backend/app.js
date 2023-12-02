const express = require("express");
const app = express();
const mongoose = require('mongoose');
const morgan = require("morgan");
const bodyparser = require("body-parser");
var cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const errorHandler = require("./middleware/error")
const port = process.env.PORT || 8002;

// import router from "./routes/authiRoute";
const authroutes=require("./routes/authiRoute");
// DB connection 
mongoose.connect(process.env.DATABASE, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(() => console.log("DateBase connected successfuly")).catch((err) => console.log(`error in database ${err}`));

// server port
app.listen(port, () => {
    console.log(`server running on port number ${port}`);
});

// Middleware
app.use(morgan('dev'));
app.use(bodyparser.json({ limit: "5mb" }));
app.use(bodyparser.urlencoded({ limit: "5mb", extended: true }));

// to use cookies for authinticatuion 
app.use(cookieParser());
// requests to backend
app.use(cors());
// custome error 
app.use(errorHandler);

// routers
// app.get('/',(req,res)=>{
//     res.send("hello from js");
// })
// main router
app.use("/Jobboard",authroutes);