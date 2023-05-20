const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
var bodyParser = require("body-parser");



app.engine("html",require("ejs").renderFile);
app.set("view engine", "html");
app.use("/public",express.static(path.join(__dirname,"public")));
app.set("views",path.join(__dirname,"/pages"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/', (req,res) =>{
    res.render('home');
})




app.listen(4000,()=>{
    console.log("server rodando!");
});