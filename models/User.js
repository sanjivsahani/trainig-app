const mongoose = require("mongoose")

// creating a user Schema 

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    CreatedAt:{
        type:Date,
        default:Date.now
    }
}) 

const User = mongoose.model('user',UserSchema)

module.exports = User;
