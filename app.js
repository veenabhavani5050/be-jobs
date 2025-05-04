const express = require('express');
const authRouter =require('./routes/authRoutes');
const logger = require('./utils/logger');
const cookieparse= require ('cookie-parser');
const errorRoute = require('./utils/errorRoute');

const app = express();

// middleware to parse cookies
app.use(cookieparse())
// middle  ware to parse json request bodies
app.use(express.json())
// customized log requests
app.use(logger)
// common url path
app.use('/api/v1/auth',authRouter)
// error route
app.use(errorRoute)


module.exports=app;