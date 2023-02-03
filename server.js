const express = require('express')
const app = express()
const port = 5200

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`)
})

app.use(express.static('public'))