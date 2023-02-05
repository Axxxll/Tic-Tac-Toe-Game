const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5200

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`)
})

app.use(express.static('public'))