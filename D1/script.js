const express = require('express')
const app = express()

app.use(function(req,res,next){
    console.log('middleware');
    next();
})

app.get('/',function(req, res){
    res.send("Hellllo World")
})

app.get('/about',function(req, res){
    res.send("World")
})

app.listen(3000)