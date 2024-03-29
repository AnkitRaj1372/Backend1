const express = require('express');
require('dotenv').config()

const app = express();

const port = process.env.PORT || 3000;

let data = {
  "name": "Ankit",
  "last": "Raj",
  "mobile": "8092105162"
}

app.get('/',(req,res)=>{
  res.send('Hello Ankit!');
})

app.get('/twitter',(req,res)=>{
  res.send(`Don't use Twitter`)
})

app.get('/login',(req,res)=>{
  res.json(data)
})

app.get('/time',(req,res)=>{
  let time = new Date();
  let str = time.toTimeString();
  res.send(str);
})

app.listen(port,()=>{
  console.log(`App is listening on port ${port}`)
})