const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
var bodyParser = require("body-parser");
const config = require('./config.js');
const Gallery = require('./models/gallery.js');
const Course = require('./models/course.js');

mongoose.connect(config.connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));


app.engine("html",require("ejs").renderFile);
app.set("view engine", "html");
app.use("/public",express.static(path.join(__dirname,"public")));
app.set("views",path.join(__dirname,"/pages"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/', (req,res) =>{
    res.render('home')
})

app.get('/galeria', (req,res)=>{
    Gallery.find({}).sort({"_id":+1}).exec((err, gallery) => {
        gallery = gallery.map((val) => {
            return {
                title: val.title,
                description: val.description,
                image: val.image
            }
        });
        res.render('galeria', {gallery: gallery});
    });
    
})

app.get('/curso', (req,res)=>{
    Course.find({}).sort({"_id":+1}).exec((err, course) => {
        course = course.map((val) => {
            return {
                title: val.title,
                description: val.description,
                video: val.video
            }
        });
        res.render('curso', {course:course});
    });
})


app.get('/fale-conosco', (req,res)=>{
    res.render('fale-conosco');
});




app.listen(4000,()=>{
    console.log("server rodando!");
});