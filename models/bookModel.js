const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    bookImg:{
        type:String,
        required:true
    },
    bookName:{
        type:String,
        required:true
    },
    bookCategory:{
        type:Number,
        required:true
    },
    bookFile:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})

const books = mongoose.model("books",bookSchema)

module.exports=books