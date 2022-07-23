// npm install express and node

var express= require('express');
var app=express();
app.path= require("path");

// npm install express-session

//sessions

var sessions = require('express-session');

app.use(
    sessions({
        cookieName : "sessions",
        secret : "blargadeeblargblarg",
        saveUninitialized : true,
        resave : false,
    })
);
var session;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
 var path = require('path');

 app.use(express.static(path.join(__dirname,'images')));
 app.use(express.static(path.join(__dirname,'')));

 // MongoDB Database Connection

 const mongoose= require('mongoose');
const { dirname } = require('path');

 mongoose.connect("mongodb+srv://devivaraprasad:dsp9391@cluster0.syjej.mongodb.net/belongtask?retryWrites=true&w=majority",{
    useUnifiedTopology : true,
    useNewUrlParser : true,
 }).then(()=>{
    console.log("Mongoose Connected!");
 }).catch((e)=>{
    console.log("Not Connecetd to MongoDB Database");
 });
 const connection= mongoose.connection;


 // calling Schemas

 const register=require('./models/registerschema.js');
 const logindataa=require('./models/loginschema.js');

 //pages calling
 app.get('/',function(req,res){
   // session=req.session;
   // if(session.user){
   //    res.sendFile(__dirname+'/pages/home.html')
   // }
   // else{
   //    res.redirect('/login')
   // }
    res.sendFile(__dirname+'/pages/home.html');
 }),
 app.get('/home',function(req,res){
   res.sendFile(__dirname+'/pages/about.html')
 })

 app.get('/about',function(req,res){
   session=req.session;
   if(session.user){
      res.sendFile(__dirname+'/pages/about.html')
   }
   else{
      res.redirect('/login')
   }
   //  res.sendFile(__dirname+ '/pages/about.html');
 })
 app.get('/clinical',function(req,res){
   session=req.session;
   if(session.user){
      res.sendFile(__dirname +'/pages/clinical.html');
   }
   else{
      res.redirect('/login')
   }
   
 })
 app.get('/clinical-research',function(req,res){
   session=req.session;
   if(session.user){
      res.sendFile(__dirname +'/pages/clinical-research.html');
   }
   else{
      res.redirect('/login')
   }
  
})
app.get('/bioformatics',function(req,res){
   session=req.session;
   if(session.user){
      res.sendFile(__dirname +'/pages/bioformatics.html');
   }
   else{
      res.redirect('/login')
   }
   
})
app.get('/book-a-test',function(req,res){
   session=req.session;
   if(session.user){
      res.sendFile(__dirname +'/pages/book-a-test.html');
   }
   else{
      res.redirect('/login')
   }
  
})
app.get('/register',function(req,res){
      res.sendFile(__dirname+'/pages/register.html');  
})
app.get('/login',function(req,res){
  
      res.sendFile(__dirname+'/pages/login.html')
  
  
   
})
app.get('/logout',function(req,res){
   req.session.destroy();
   res.redirect('/')
})


app.get('/getregisterdata',(req,res)=>{
   register.find(function(err,result){
       if(err||result==null)
       {
           console.log(err);
       }
       else if(result!=undefined){
           console.log(result);
           res.send(result);

       }
   })
});

app.post('/sendDatas',function(req,res){
   //res.sendFile(__dirname + '/pages/sample.html');
   console.log(req.body);
   //res.send(req.body);
   var obj = new register({
       name:req.body.name,
       email:req.body.email,
       number:req.body.number,
       password:req.body.password,
       
   })
   register.findOne({email:req.body.email}, function(err,docs){
       if(err || docs==null){
           console.log(err)
           obj.save(function(err, results) {
               if(results){
                  console.log("results"+ results);
                   res.send(results);
               }else{
                   console.log(err)
                   res.send(err);
               }
           })
       }
       else{
           res.sendStatus(500)  
       }
   })
  
});

app.post('/loginDatas',function(req,res){
   session=req.session;
   //console.log(req.body);
   register.findOne({email:req.body.email,password:req.body.password},function(err,docs){
       if(err || docs==null)
       {
           //console.log(err)
           res.sendStatus(500);
       }
       else{
          session.user=docs;


           res.send(docs);
       }
   })
});


 app.listen(4000,()=> console.log("Successfully Server Started"))
