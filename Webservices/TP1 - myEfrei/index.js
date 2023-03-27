const express = require("express")
const mongoose = require("mongoose")
const port = 3000
const { dbConnect } = require("./config/db")

const app = express()

app.use(express.json())

const studentsRoutes = require ('./routes/students')
const classesRoutes = require ('./routes/classes')

app.use('/students', studentsRoutes)
app.use('/classes', classesRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})