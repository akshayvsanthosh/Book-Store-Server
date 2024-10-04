const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    console.log("Inside jwtMiddleware");
    const token = req.headers['authorization'].split(" ")[1]
    if (token) {
        try {
            const jwtResponse=jwt.verify(token,process.env.JWT_PASSWORD)
            console.log(jwtResponse);
            req.payload=jwtResponse.userId
            next()
        } catch (error) {
            res.status(401).json("Invalid token, Login again!")
        }
    } else {
        res.status(404).json("Token missing!")
    }
}

module.exports=jwtMiddleware