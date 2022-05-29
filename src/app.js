const path = require('path')
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

const basePAth = path.join(__dirname, '../public')

app.use(express.static(basePAth))

app.listen(port, () => {
    console.log('Server Started on port ' + port)
})

