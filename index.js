const express = require('express')

const data = require('./data')

const app = express()

app.use(express.json())

app.get('/get',(req, res) => {
    res.send("Backend running");
})

app.get('/', (req, res) => {
    const x = req.query
    let chq = true;
    data.map( (i) => {
        if(i.username===x.username && i.age === x.age && i.emil === x.email){
            res.send({"message":"User Found", "userDetails": i})
            chq = false
            return
        }
        
    })
    if(chq){
        res.send({"message":"User Not found"})
    }

    
})

const PORT = 9000

app.listen(9000, async() => {
    try{
        console.log("Server is Running")
    }catch(err){
        console.log("Server has a issue in listen",err)
    }
})