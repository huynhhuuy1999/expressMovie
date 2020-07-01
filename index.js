require('dotenv').config();

const express= require('express');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

const port=3000;
const app=express();

const homeRoute= require('./routes/home.route.js');
const filmRoute= require('./routes/film.route.js');


var bodyParser = require('body-parser'); // chạy được req.body trong phương thức POST

app.set('view engine', 'pug');
app.set('views', './views'); // tạo thư mục view default

app.use(express.static('public'));

// cấu hình để chạy bodyParser
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/home', homeRoute);
app.use('/film',filmRoute);

// app.get('/',function(req,res){
// 	res.render('Home/index');
// });

app.get('/',homeRoute);


app.listen(port,function(){
	console.log("Server starting" + port+" ...");
});