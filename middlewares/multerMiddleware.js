const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        const filename=`${Date.now()}-${file.originalname}`
        callback(null,filename)
    }
})

const multerMiddleware=multer({
    storage
})

module.exports=multerMiddleware