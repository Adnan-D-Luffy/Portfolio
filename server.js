const express = require("express");
const ejs = require("ejs");
const morgan = require("morgan");
const app = express();
const path = require("path")

app.use(express.static(path.join(__dirname,"Files")));

app.set("view engine" ,"ejs");
app.set("views",path.join(__dirname,"Files"))
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.listen(3000,()=>{
    console.log("Server is Up !")
});

app.get("/",(req,res)=>{
    res.render("index")
})
app.post("/sent/msge",(req,res)=>{      
    console.log(req.body)

})