const express = require("express")

const app = express()

const calculer = (nb1, nb2, operation) => {

  switch (operation) {
    case "add":
      return Number(nb1) +  Number(nb2)
      break;
    case "minus":
      return Number(nb1) -  Number(nb2)
      break;
    case "multiply":
      return Number(nb1) *  Number(nb2)
      break;
    case "divide":
      return Number(nb1) /  Number(nb2)
      break;
  
    default:
      break;
  }
}

app.use(express.json())

app.get("/", (req,res) => {
    res.send("coucou")
})

app.get("/calcul/:operation/:nb1/:nb2", (req,res)=>{

  const { nb1, nb2, operation } = req.params
  const result = calculer(nb1, nb2, operation)
  res.send(nb1 + operation + nb2 + " = " + result)

})

app.listen(3000)