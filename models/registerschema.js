const mongoose = require('mongoose');

const belongtask =mongoose.Schema;
const register = new mongoose.Schema({
    name:{
        type:String,
       
    },
    email:{
        type:String,
       
    },
    number:{
        type:String,
       
    },
   
    password:{
        type:String,
       
    },
 
    

});

module.exports = mongoose.model('register',register);