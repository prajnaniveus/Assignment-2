const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:true}))


const myObj = {users: [
    {
        id:1,
        name:'prajna'
    },
    {
        id:2,
        name:'apple'
    },{
        id:3,
        name:'orange'
    }
]}

console.log(myObj);

app.get('/users',(req, res) => {
    res.json(myObj)
})

app.post('/users', (req,res) => {
    console.log(req.body);    
    res.send(`Done : User = ${req.body.user}  &  Id = ${req.body.id}`);
});

app.listen(port, () => {
    console.log(`server running at ${port}`);
});
