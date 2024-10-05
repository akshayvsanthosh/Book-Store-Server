const books = require('../models/bookModel')

// upload book
exports.addBookController=async(req,res)=>{
    console.log("inside addBookController");
    const {bookName,bookCategory}=req.body
    const userId = req.payload
    const bookImg=req.files['bookImg']?req.files['bookImg'][0].filename:null
    const bookFile=req.files['bookFile']?req.files['bookFile'][0].filename:null
    console.log(bookName,bookCategory,bookImg,bookFile,userId);
    try {
        const newBook =new books({
            bookImg,bookName,bookCategory,bookFile,userId
        })
        await newBook.save()
        res.status(200).json(newBook)
    } catch (error) {
        res.status(401).json(error)
    }
}

// get all book
exports.getAllBooksController=async(req,res)=>{
    console.log("Inside getAllBooksController");
    try {
        const allBooks = await books.find()
        res.status(200).json(allBooks)
    } catch (error) {
        res.status(401).json(error)
    }
}

// get user book
exports.getUserBooks=async(req,res)=>{
    console.log("Inside getUserBooks");
    const userId=req.payload
    try {
        const allBooks = await books.find({userId})
        res.status(200).json(allBooks)
    } catch (error) {
        res.status(401).json(error)
    }
}

// home book
exports.getHomeBooksController=async(req,res)=>{
    console.log("Inside getHomeBooksController");
    try {
        const allBooks = await books.find().limit(3)
        res.status(200).json(allBooks)
    } catch (error) {
        res.status(401).json(error)
    }
}

// delete book
exports.deleteABookController=async(req,res)=>{
    console.log("Inside deleteABookController");
    const {bid}=req.params

    try {
        const removedBook = await books.findByIdAndDelete({_id:bid})
        res.status(200).json(removedBook)
    } catch (error) {
        res.status(401).json(error)
    }
}