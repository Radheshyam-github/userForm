const mongoose =require('mongoose');
const { type } = require('os');

const UserFormSchema = new mongoose.Schema(
    {
        firstname : {
            type:String,
            required:true
        },
        lastname : {
            type:String,
            required:true
        },
       Mobile_No : {
            type:Number,
            required:true,
            unique:true

        },
        Email_Id : {
            type:String,
            required:true,
            unique:true
        },
        Street : {
            type:String,
            required:true
        },
        City : {
            type:String,
            required:true
        },
        State : {
            type:String,
            required:true
        },
        country : {
            type:String,
            required:true
        },
        Login_id : {
            type:String,
            required:true
        },
        password : {
            type:String,
            required:true
        },
    
    }
)
const Userform=mongoose.model("Userform",UserFormSchema);

module.exports=Userform;