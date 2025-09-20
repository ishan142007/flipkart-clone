
const Student=require('../Model/Student.model');

const create=async(req,res)=>{  
   const response=await Student.create(req.body)
   try{ res.status(200).json({success:"data",data:response})}
   catch(error){res.status(500).json("error",error)}

}




const fetchdata=async (req,res)=>{
    try{
    const ans=await Student.findAll();
    console.log("kjfskjak",ans)
    res.status(200).json({success:"data found",data:ans}

    )}
        catch(error){
            res.status(500).json({error:"error compiled",error});
        }
}
module.exports={create,fetchdata}