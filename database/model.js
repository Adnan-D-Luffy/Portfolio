const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const msge = new Schema ({
    Name: {
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    Txt : {
        type:String,
        required:true,
    }

},{timestamps:true})

const Alu = mongoose.model("Msge",msge);

module.exports = Alu;