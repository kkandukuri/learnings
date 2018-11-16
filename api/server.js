const express=require('express'),
path=require('path'),
bodyParser=require('body-parser'),
cors=require('cors'),
mongoose=require('mongoose'),
config=require('./DB');

mongoose.Promise=global.Promise;
mongoose.connect(config.DB,{useNewUrlParser:true}).then(
    ()=>{console.log('Connected to DB')},
    err=>{console.log('Cannot connect to DB '+err)}
);
const app=express();
app.use(bodyParser.json());
app.use(cors);
const port=process.env.PORT||4000
const server=app.listen(function(){
    console.log('Listening on Port'+port)
});