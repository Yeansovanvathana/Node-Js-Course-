const express = require('express')
require('./db/mongoose')
const e = require('express')
const UserRouter = require('../router/user')
const TaskRouter = require('../router/task')

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(UserRouter)
app.use(TaskRouter)

const bcrypt = require('bcrypt')

const myFunction = async () => {
    const password = "Red12345!"
    const hashedPassword = await bcrypt.hash(password, 8)


    console.log(password)
    console.log(hashedPassword)
    const isMatch = await bcrypt.compare("Red12345!", hashedPassword)
    console.log(isMatch)
}
 myFunction()

app.listen(port ,() =>{
    console.log("Server is up on port ", port)
})