// express server
const express = require('express')

const app = express()

const PORT = process.env.PORT || 8080

// serve react app from client build folder
app.use(express.static('client/build'))

// hello team endpoint
app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello from Express' })
})

app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`)
})
