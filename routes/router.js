const express = require('express')
const userController= require('../controllers/userController')
const jwtMiddleware=require('../middlewares/jwtMiddleware')
const multerMiddleware=require('../middlewares/multerMiddleware')
const bookController=require('../controllers/bookController')

const router = new express.Router()

// register
router.post('/register',userController.registerController)

// login
router.post('/login',userController.loginController)

// addBook
router.post('/addBook',jwtMiddleware,multerMiddleware.fields([
    {name:'bookImg',maxCount:1},
    {name:'bookFile',maxCount:1}
]),bookController.addBookController)

// get all book
router.get('/allBooks',jwtMiddleware,bookController.getAllBooksController)

// get user book
router.get('/userBooks',jwtMiddleware,bookController.getUserBooks)

// delete book
router.delete('/book/:bid/delete',jwtMiddleware,bookController.deleteABookController)


module.exports=router