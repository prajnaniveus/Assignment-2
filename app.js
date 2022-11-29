const express = require('express');
const app = express();
const bodyParse = require('body-parser');
let cors=require("cors");
const port=2000;
app.use(bodyParse.json())
app.use(cors());


app.get('/',(req,res)=>{
    let query=req.query
    let path=req.path
    console.log(query)
    console.log(path)
    res.json({"info":{query,path}})
})

app.post('/postData', (req,res) => {
   letbdata=[];
    data.push(req.body.id)
    data.push(req.body.name)
    res.send(data)
})

app.listen(port, () => {
    console.log('listening to server http://localhost:',port);
})
