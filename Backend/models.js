const mongoose = require("mongoose");

const studentwikischema = new mongoose.Schema({
    Division : {
        type:String,
        required:true
    },
    
    Batch : {
        type:String,
        required:true
    },

    Name : {
        type:String,
        required:true
    },

    RollNumber : {
        type:String,
        required:true,
        unique:true
    },

    Username : {
        type:String,
        required:true,
        unique:true
    },

    Password : {
        type:String,
        required:true
    },

    Representative : {
        type:String,
        required:true
    },
})

const c2 = new mongoose.model("C2" , studentwikischema);

module.exports = c2;