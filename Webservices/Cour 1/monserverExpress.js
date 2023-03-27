const express = require("express")

const app = express()
app.use(express.json())

app.get("/", (req,res) => {
    console.log(req.params)
    console.log(req.query.message)
    res.send("coucou")
})

app.post("/",(req,res)=>{
    res.send('coucou la POST')
})

app.get("/calcul/", (req,res)=>{
    res.end(req.query.nb1 + " "+ req.query.nb2)
})
app.get("/calcul/:nb1/:nb2", (req,res)=>{
    res.end(req.params.nb1 + " "+ req.params.nb2)
})
app.post("/calcul", (req, res)=> {

    console.log(req.body.hey)
    res.end(req.body.hey)
})

app.listen(3000)