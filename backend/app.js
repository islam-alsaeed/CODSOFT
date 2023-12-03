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
const authroutes = require("./routes/authiRoute");// for authentication routes
const UserRoute =require("./routes/UserRoutes");//user routes


// DB connection 
mongoose.connect(process.env.DATABASE, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(() => console.log("DateBase connected successfuly")).catch((err) => console.log(`error in database ${err}`));

// Middleware
app.use(morgan('dev'));
app.use(bodyparser.json({ limit: "5mb" }));
app.use(bodyparser.urlencoded({ limit: "5mb", extended: true }));



// to use cookies for authinticatuion 
app.use(cookieParser());

// requests to backend
app.use(cors());

// routers
// app.get('/',(req,res)=>{
//     res.send("hello from js");
// })
// //main router

// user autheriztion route
app.use( authroutes);
// 
app.use( UserRoute);
// app.use("/app", authroutes);

// custome error 
app.use(errorHandler);

// server port
app.listen(port, () => {
    console.log(`server running on port number ${port}`);
});