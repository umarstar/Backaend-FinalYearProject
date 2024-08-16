const express =require("express");
const app =express();
require("./config");
const MyModel =require("./schema");

const cors =require("cors");   //it is used to show data in json


app.use(express.json());
app.use(cors());

app.post("/post",async(req ,res)=>{
    let result =new MyModel(req.body);
    result =await result.save();
    res.send(result) 
})

app.listen(4000,(err)=>{
    if(err){

        console.log("error to start")
    }
})