const express = require('express');
const port = 1111;
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const db = require('./config/mongoose');

const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.urlencoded());

app.use('/',require('./routes'));

app.listen(port,(err)=>{
    if(err){
        console.log("Sever not started");
        return false;
    }
    console.log("Server Stated");
})