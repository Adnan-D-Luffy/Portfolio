const express = require("express");
const ejs = require("ejs");
const morgan = require("morgan");
const app = express();
const path = require("path")
const Alu = require("./database/model.js")
const mongoose = require("mongoose")

app.use(express.static(path.join(__dirname,"Files")));

app.set("view engine" ,"ejs");
app.set("views",path.join(__dirname,"Files"))
app.use(express.urlencoded({extended:true}))
app.use(express.json());


const mongooseID = "mongodb+srv://NodeDB:asdf1234@cluster0.cbnst.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongooseID)
.then(info =>{
    console.log("DB connected ")
})
.then (()=>{
    app.listen(3000,()=>{
    console.log("Server is Up !")
});

app.get("/",(req,res)=>{
    res.render("index")
})
app.post("/sent/msge",async (req,res)=>{      
    const Name = req.body.Name;
    const mail = req.body.mail;
    const txt = req.body.txt;

    try {
         const msgeStat = await Alu.create({
        Name:Name,
        Email:mail,
        Txt:txt
    })
    if(msgeStat) {
        res.json(200)
    }
        
    } catch (error) {
        res.json(404)
        console.log(error)
    }
   

})
})
.catch((err)=>{
    console.log(err)
})
