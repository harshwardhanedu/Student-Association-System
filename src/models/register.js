const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    contact :{
        type:Number,
        required:true
    },
    email :{
        type:String,
        required:true
    },
    gender :{
        type:String,
        required:true
    },
    dept :{
        type:String,
        required:true
    },
    year :{
        type:String,
        required:true
    },
    fest :{
        type:String,
    },
    fest1 :{
        type:String,
    },
    fest2 :{
        type:String,
    }

})

const Register = new mongoose.model("Register",registerSchema);

module.exports = Register;