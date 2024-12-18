const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/',(req,res) => {
    res.send("Hello from node and github")
})

app.listen(port,() =>{
    console.log(`Server is runing at port ${port}`)
})