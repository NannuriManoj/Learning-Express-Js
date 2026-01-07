const express = require("express")
const app = express()

app.get('/cats/:name',(req, res) =>{
    const {name} = req.params;
    res.send(`<h1>cat name is ${name} <h1>`)
})

app.get('/dogs/:name',(req, res) =>{
    const {name} = req.params;
    res.send(`<h1>dog name is ${name}</h1>`)
})

app.get('/dogs/:name',(req, res) =>{
    const {name} = req.params;
    res.send(`<h1>dog name is ${name}</h1>`)
})

app.get('/search',(req, res) =>{
    const { q } = req.query;
    console.log("Hi");
    res.send(`<h1>dog name is ${q}</h1>`)
})

app.get(/(.*)/,(req, res) =>{
    res.send("I don't know this request")
})

app.listen(3000, ()=>[
    console.log("Listening on port 3000")
])