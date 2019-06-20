const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const data = require('./schema');
const app = express();
const path=require('path');
let port = 3000 || process.env.PORT;

//making a connection 
mongoose.connect('mongodb://localhost:27017/taskDB', {useNewUrlParser: true});

// allow data to be read from the index file 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:'false'}));
// get request 

app.get('/',(req,res) => {
let file=path.join(__dirname,'src','index.html');
res.sendFile(file);
});

app.post('/',(req,res)=>{
    let name=req.body.name;
    let age=req.body.age;
    let gender=req.body.gender;
    let bodyData={
        name:name,
        age:age,
        gender:gender
    }
    
    if(name!=undefined&&gender!=undefined&&age!=undefined){
        data.collection.insertOne(bodyData , (err,result)=>{
        console.log(result);
        res.send({success : true});
    });

 
   
}
 res.send({success : false});
})

app.listen(port , ()=>{
    console.log("app is listening at port " + port );
})  