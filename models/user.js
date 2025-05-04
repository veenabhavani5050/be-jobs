const mongoose = reqire('mongoose')

const userShema = new mongoose.Shema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        enum:['user','recuriteer','admin'],
        default:'user'
    },
    profilepicture:String,
    resume:String,
    isBlocked:Boolean,
},{
    timestamps:true,
})

module.exports =mongoose.module('User',userShema,'users')