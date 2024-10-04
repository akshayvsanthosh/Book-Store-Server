require('dotenv').config()
const express = require('express')
const cors=require('cors')
const router = require('./routes/router')
require('./DB/connection')

const bSServer=express()
bSServer.use(cors())
bSServer.use(express.json())
bSServer.use(router)

const PORT = 3000 || process.env.PORT

bSServer.listen(PORT,()=>{
    console.log(`bSServer started at ${PORT}`);
})

bSServer.get('/',(req,res)=>{
    res.status(200).send('<h1>bSServer started</h1>')
})