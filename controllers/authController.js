const authController ={
register: async (req,res)=>{
try{
   return res.status(200).json({
        message:'register successfully'
    })
}catch(err){
return res.status(500).json({
    message:'Register failed'
})
}
},
login:async (req,res)=>{
    try{
    
    }catch(err){
    return res.status(500).json({
        message:'Login failed'
    })
    }
    },
    logout:async (req,res)=>{
        try{
        
        }catch(err){
        return res.status(500).json({
            message:'logout failed'
        })
        }
        },
        me:async (req,res)=>{
            try{
            
            }catch(err){
            return res.status(500).json({
                message:'profile picture  failed'
            })
            }
            },
}

module.exports=authController;