// setting of body parsers

const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs')

app.get("/profile/:username", function(req, res){
    res.send("kuch")
})

app.listen(3000, function(){
    console.log('run')
})