const http = require("http")
const { url } = require("inspector")

const hostname = "localhost"
const port = 3000

const server = http.createServer((req, res)=>{
    
    const reqUrl = req.url
    if(reqUrl == "/"){
        res.statusCode = 200 
        res.setHeader('Content-Type', "text/plain")
        res.end("Coucou !")
    }
    if(reqUrl =="/calcul"){
        if(req.method == "GET"){
            console.log(req.params)
            res.statusCode = 200
            
            res.setHeader('Content-Type',"text/plain")
            res.end("Je fais des maths")
        }else if(req.method == "POST"){
            console.log(req.body)
            res.setHeader('Content-Type',"text/plain")
            res.end("Je fais des maths en POST")
            
        }else
            {
            req.statusCode = 202
            res.setHeader('Content-Type',"text/plain")
            res.end("Mauvaise methode")

        }
    }
    if(reqUrl =="/physique"){
        res.statusCode = 200
        res.setHeader('Content-Type',"text/plain")
        res.end("Je fais de la physique")
    }

})


server.listen(port)