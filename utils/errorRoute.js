const errorRoute =(req,res)=>{
    res.status(404).json({message:'Route not found'})
}

module.exports=errorRoute;