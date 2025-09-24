const jwt= require('jsonwebtoken')
require('dotenv').config();

const ans =function(req,res,next){
    const autheader= req.headers['authorization']
    if(!autheader) return res.status(401).json({Message:'no token found'})
    
    const parts= autheader.split(' ');
    if(parts.length!=2){
        return res.status(401).json({Message:'no token found'})

    const sc=parts[0];
    const token=parts[1]
    if(!/^Bearer$/i.test(sc)){
        return res.status(401).json({Message:"no token found"})
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
        if(err){
            return res.status(401).json({Message:"token not matched"})
        }
        req.userId= decode.id;
        next();
    })
    }
}
module.exports=ans
