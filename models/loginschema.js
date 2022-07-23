const mongoose=require('mongoose');
const belongtask=mongoose.Schema;
const logindataa=new mongoose.Schema({
    email:{
        type:String,
        
    },
    password:{
        type:String,
        
    },

});

module.exports=mongoose.model('logindataa',logindataa);