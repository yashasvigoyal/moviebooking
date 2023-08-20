const mongoose = require('mongoose');
const userSchema  = new mongoose.Schema({
    userid : {
        type:Number
    },
    email: {
        type:String
    },
    first_name : {
        type:String
    },
    last_name :{
        type: String
    },
    username:{
        type:String
    },
    contact: {
        type:String
    },
    password:{
        type:String
    },
    role:{
        type: String, 
        default: 'user'
    }, 
    uuid : {
        type:String
    },
    accesstoken : {
        type:String
    },
    isLoggedIn: {
        type:Boolean
    },
    coupens:{
        type:Array
    },
    bookingRequests: {
        type:Array
    },
},
          { timestamps: true }
)
module.exports = mongoose.model("User",userSchema);