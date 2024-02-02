const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Let's generate some github messages!")
})

app.listen(port)