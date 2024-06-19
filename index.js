var express = require('express')
var app = express()

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/html/index.html')
})
app.get('/gabriel', (req, res)=>{
    res.sendFile(__dirname + '/html/gabriel.html')
})

app.listen(8080, (req, res)=>{
    console.log('Servidor está funcionando na URL http://localhost:8080/')
})